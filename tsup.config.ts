import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  splitting: true,
  external: ['react', 'react-dom'],
  injectStyle: false,
  sourcemap: true,
  treeshake: true,
  tsconfig: './tsconfig.json',
});
