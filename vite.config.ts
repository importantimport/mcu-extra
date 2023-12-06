import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  build: {
    lib: {
      entry: resolve('src/index.ts'),
      fileName: 'index',
      formats: ['es'],
      name: 'index',
    },
    rollupOptions: {
      external: ['@material/material-color-utilities'],
    },
  },
  plugins: [dts()],
})
