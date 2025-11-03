import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  clean: true,
  dts: true,
  esbuildOptions(options) {
    options.supported = {
      'import-meta': true,
    }
  },
})
