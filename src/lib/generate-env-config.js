const fs = require('fs');

// Obtener las variables del process.env (que vienen de .env.production durante el build)
const envContent = `
window.__ENV__ = {
  VITE_SUPABASE_URL: "${process.env.VITE_SUPABASE_URL || ''}",
  VITE_SUPABASE_ANON_KEY: "${process.env.VITE_SUPABASE_ANON_KEY || ''}"
};
`;

// Crear el archivo en la carpeta dist (o donde Vite genere el build)
fs.writeFileSync('./dist/env-config.js', envContent);
console.log('✅ Archivo env-config.js generado correctamente');