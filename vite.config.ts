/// <reference types="vitest" />
import { resolve } from 'path';
import { defineConfig } from 'vite';
import solid from 'solid-start/vite';
import unocss from 'unocss/vite';

export default defineConfig({
  resolve: {
    alias: {
      '~': resolve('src'),
      solidocs: resolve('docs/.solidocs'),
    },
  },
  test: {
    globals: true,
  },
  server: {
    open: true,
    host: true,
  },
  plugins: [solid({ adapter: 'solid-start-vercel' }), unocss()],
});
