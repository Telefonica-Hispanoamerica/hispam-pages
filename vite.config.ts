import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		open: true,
		port: 5173,
	},
	css: {
		preprocessorOptions: {
			scss: {
				implementation: sass
			}
		}
	},
	optimizeDeps: {
		include: [
		  'hispam-pages/**/*.css', // Patrón para incluir todos los archivos CSS del paquete
		],
	},
	assetsInclude: ['**/*.woff', '**/*.woff2', '**/*.ttf', '**/*.otf'],	
})
