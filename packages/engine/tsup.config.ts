import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  clean: true,
  dts: true,
  external: ['autoprefixer', 'postcss', 'nanoid'],
  esbuildOptions(options) {
    options.supported = {
      'import-meta': true,
    }
  },
})
