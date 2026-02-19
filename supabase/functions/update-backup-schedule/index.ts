import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.49.1";
import { getCorsHeaders } from "../_shared/cors.ts";

serve(async (req) => {
  const origin = req.headers.get("origin");
  const corsHeaders = getCorsHeaders(origin);

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Authentication check
    const authHeader = req.headers.get("Authorization");
    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const token = authHeader.replace("Bearer ", "");
    const { data: { user }, error: authError } = await supabase.auth.getUser(token);

    if (authError || !user) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Admin role check
    const { data: roleData } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", user.id)
      .eq("role", "admin")
      .maybeSingle();

    if (!roleData) {
      return new Response(
        JSON.stringify({ error: "Forbidden: Admin access required" }),
        { status: 403, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // hour is Vietnam time (UTC+7), minute is the same
    const { hour: vietnamHour, minute = 0, email, enabled = true, resendApiKey } = await req.json();

    // Convert Vietnam time to UTC for cron job
    const utcHour = (vietnamHour - 7 + 24) % 24;

    console.log(`Updating backup schedule: Vietnam time=${vietnamHour}:${minute}, UTC=${utcHour}:${minute}, email=${email}, enabled=${enabled}`);

    // Save settings to backup_settings table using service role
    const { data: existingSettings } = await supabase
      .from("backup_settings")
      .select("id, cron_token")
      .limit(1)
      .maybeSingle();

    // Store Vietnam time in database for display
    const settingsData = {
      backup_hour: vietnamHour,
      backup_minute: minute,
      notification_email: email || "zhunter1501@gmail.com",
      is_enabled: enabled,
      resend_api_key: resendApiKey ?? null,
      last_scheduled_at: new Date().toISOString(),
    };

    // Upsert settings row and ensure we have a cron token
    let cronToken = existingSettings?.cron_token as string | undefined;
    if (existingSettings?.id) {
      await supabase
        .from("backup_settings")
        .update(settingsData)
        .eq("id", existingSettings.id);
    } else {
      const { data: inserted, error: insertError } = await supabase
        .from("backup_settings")
        .insert(settingsData)
        .select("id, cron_token")
        .single();
      if (insertError) throw insertError;
      cronToken = inserted?.cron_token;
    }

    // If cron_token is still missing for any reason, load it
    if (!cronToken) {
      const { data: loaded } = await supabase
        .from("backup_settings")
        .select("cron_token")
        .limit(1)
        .single();
      cronToken = loaded?.cron_token;
    }

    if (!cronToken) {
      throw new Error("Missing cron_token in backup_settings");
    }

    console.log("Backup settings saved successfully");

    // Actually create/update the cron job via the database function
    const supabaseAnonKey = Deno.env.get("SUPABASE_ANON_KEY") || Deno.env.get("SUPABASE_PUBLISHABLE_KEY") || "";
    const baseUrl = supabaseUrl;

    // Call upsert_backup_cron to schedule/unschedule the pg_cron job
    // The cron job uses the cron_token for auth (not anon key)
    const { error: cronError } = await supabase.rpc("upsert_backup_cron", {
      _hour: utcHour,
      _minute: minute,
      _enabled: enabled,
      _base_url: baseUrl,
      _anon_key: cronToken!,
    });

    if (cronError) {
      console.error("Error setting up cron job:", cronError.message);
      // Don't fail the whole request - settings are saved
    } else {
      console.log(`Cron job ${enabled ? 'scheduled' : 'disabled'} at UTC ${utcHour}:${minute}`);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: `Backup settings saved. Scheduled for ${String(vietnamHour).padStart(2, '0')}:${String(minute).padStart(2, '0')} Vietnam time daily`,
        email: email,
        enabled: enabled,
        hour: vietnamHour,
        minute: minute,
        cronUpdated: !cronError,
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("Error updating backup schedule:", errorMessage);
    
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});