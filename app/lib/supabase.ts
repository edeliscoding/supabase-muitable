import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://fvjjfisevvvnnuogpdxe.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ2ampmaXNldnZ2bm51b2dwZHhlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYxNDYwOTksImV4cCI6MjAzMTcyMjA5OX0.TtZ6Q0xc6jPLW3xEFj6B5rCjxsLjwpxO4zZa3fekqWY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
