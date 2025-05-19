
import { createClient } from '@supabase/supabase-js';

// Usa variables de entorno o valores predeterminados para desarrollo local
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://uyioxdimqmekmpxyklsq.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5aW94ZGltcW1la21weHlrbHNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5MTIxMTUsImV4cCI6MjA1ODQ4ODExNX0.yNR3vJ-ZDakfghL12qX_qa8EiUeXNXrQBwKq8o4gjxE";

// Asegúrate de que haya valores válidos antes de crear el cliente
if (!supabaseUrl || !supabaseKey) {
  console.error("Supabase URL and anon key are required");
}

export const supabase = createClient(supabaseUrl, supabaseKey);
