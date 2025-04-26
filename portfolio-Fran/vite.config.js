import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    // Opciones de CSS
    devSourcemap: true, // Genera sourcemaps en desarrollo
    preprocessorOptions: {
      // Opciones para preprocesadores CSS si los usas
    },
    // Opciones para la minificación de CSS
    minify: 'cssnano',
  },
  build: {
    // Configuración para optimizar el build
    cssMinify: true, // Asegura que el CSS esté minificado
    sourcemap: false, // No genera sourcemaps en producción
    rollupOptions: {
      output: {
        // Configuración para dividir los chunks
        manualChunks: {
          vendor: ['react', 'react-dom'],
          // Agrega más chunks según sea necesario
        },
      },
    },
  },
})
