import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://argngkfvoqkizijubmam.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFyZ25na2Z2b3FraXppanVibWFtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDc3ODYxOTksImV4cCI6MjAyMzM2MjE5OX0.fSlPQipOo3Gh_kbpJqv039HMa-PFcNRAGxgoQX8Ug8Y";
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;
