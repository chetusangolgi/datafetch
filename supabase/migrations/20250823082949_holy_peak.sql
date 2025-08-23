/*
  # Create water and dustbin tables

  1. New Tables
    - `water`
      - `id` (integer, primary key, 1-10)
      - `data` (integer, data values)
    - `dustbin`
      - `id` (integer, primary key, 1-10) 
      - `data` (integer, data values)

  2. Security
    - Enable RLS on both tables
    - Add policies for public read access
*/

-- Create water table
CREATE TABLE IF NOT EXISTS water (
  id integer PRIMARY KEY CHECK (id >= 1 AND id <= 10),
  data integer NOT NULL DEFAULT 0
);

-- Create dustbin table  
CREATE TABLE IF NOT EXISTS dustbin (
  id integer PRIMARY KEY CHECK (id >= 1 AND id <= 10),
  data integer NOT NULL DEFAULT 0
);

-- Insert sample data for water table
INSERT INTO water (id, data) VALUES 
  (1, 25), (2, 30), (3, 15), (4, 40), (5, 35),
  (6, 20), (7, 45), (8, 10), (9, 50), (10, 25)
ON CONFLICT (id) DO NOTHING;

-- Insert sample data for dustbin table
INSERT INTO dustbin (id, data) VALUES 
  (1, 85), (2, 70), (3, 95), (4, 60), (5, 75),
  (6, 80), (7, 55), (8, 90), (9, 65), (10, 85)
ON CONFLICT (id) DO NOTHING;

-- Enable RLS
ALTER TABLE water ENABLE ROW LEVEL SECURITY;
ALTER TABLE dustbin ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access on water"
  ON water
  FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Allow public read access on dustbin"
  ON dustbin  
  FOR SELECT
  TO public
  USING (true);