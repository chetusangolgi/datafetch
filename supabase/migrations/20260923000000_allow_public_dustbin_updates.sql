-- Allow the public app to update dustbin sensor values through its anon client.
CREATE POLICY "Allow public update access on dustbin"
  ON dustbin
  FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);
