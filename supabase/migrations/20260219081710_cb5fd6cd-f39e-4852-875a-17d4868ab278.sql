
CREATE OR REPLACE FUNCTION public.upsert_backup_cron(
  _hour integer,
  _minute integer,
  _enabled boolean,
  _base_url text,
  _anon_key text
)
RETURNS void
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path TO 'public'
AS $fn$
DECLARE
  _cron_expression text;
  _job_name text := 'daily-backup';
  _function_url text;
  _sql text;
BEGIN
  _cron_expression := _minute || ' ' || _hour || ' * * *';
  _function_url := _base_url || '/functions/v1/backup-database';

  -- Remove existing job if any
  BEGIN
    PERFORM cron.unschedule(_job_name);
  EXCEPTION WHEN OTHERS THEN
    NULL;
  END;

  -- Only create if enabled
  IF _enabled THEN
    _sql := 'SELECT net.http_post(url := ' || quote_literal(_function_url) 
      || ', headers := ' || quote_literal('{"Content-Type":"application/json","Authorization":"Bearer ' || _anon_key || '"}') 
      || '::jsonb, body := ''{}''::jsonb) AS request_id';
    
    PERFORM cron.schedule(_job_name, _cron_expression, _sql);
  END IF;
END;
$fn$;
