import { defineConfig } from 'tsup';

export default defineConfig({
  entry: [
    'src/index.ts',
    'src/config/eslint/index.ts',
    'src/config/prettier/index.ts'
  ],
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
