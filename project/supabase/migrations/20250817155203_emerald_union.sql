/*
  # Create email signups table

  1. New Tables
    - `email_signups`
      - `id` (uuid, primary key)
      - `full_name` (text, required)
      - `email` (text, unique, required)
      - `phone` (text, optional)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `email_signups` table
    - Add policy for inserting new signups
*/

CREATE TABLE IF NOT EXISTS email_signups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text UNIQUE NOT NULL,
  phone text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE email_signups ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public to insert email signups"
  ON email_signups
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to read email signups"
  ON email_signups
  FOR SELECT
  TO authenticated
  USING (true);