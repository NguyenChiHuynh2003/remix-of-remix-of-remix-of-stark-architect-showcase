
-- Create storage bucket for database backups
INSERT INTO storage.buckets (id, name, public)
VALUES ('database-backups', 'database-backups', false)
ON CONFLICT (id) DO NOTHING;

-- Allow service role (via edge functions) full access
CREATE POLICY "Service role can manage backups"
ON storage.objects
FOR ALL
USING (bucket_id = 'database-backups')
WITH CHECK (bucket_id = 'database-backups');
