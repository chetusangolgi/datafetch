-- Allow the public app to update water sensor values through its anon client.
CREATE POLICY "Allow public update access on water"
  ON water
  FOR UPDATE
  TO public
  USING (true)
  WITH CHECK (true);
