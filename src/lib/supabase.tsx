import { createClient } from '@supabase/supabase-js';

// Para desarrollo local (estas variables deben estar en tu archivo .env.local)
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Verificación para desarrollo
if (!supabaseUrl || !supabaseKey) {
  console.warn('Supabase URL o Key no encontradas. Verifica tus variables de entorno.');
}

// Crear cliente
export const supabase = createClient(supabaseUrl, supabaseKey);