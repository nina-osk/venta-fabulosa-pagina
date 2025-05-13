import { createClient } from '@supabase/supabase-js';


const supabaseUrl =  "https://uyioxdimqmekmpxyklsq.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5aW94ZGltcW1la21weHlrbHNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI5MTIxMTUsImV4cCI6MjA1ODQ4ODExNX0.yNR3vJ-ZDakfghL12qX_qa8EiUeXNXrQBwKq8o4gjxE"

export const supabase = createClient(supabaseUrl, supabaseKey);