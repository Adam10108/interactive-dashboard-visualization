import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const serverPreviewSharedOptions = {
  port: 3000,
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: { ...serverPreviewSharedOptions },
  preview: { ...serverPreviewSharedOptions },
})
