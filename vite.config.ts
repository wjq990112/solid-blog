/// <reference types="vitest" />
import { resolve } from 'path';
import { defineConfig } from 'vite';
import mdx from '@mdx-js/rollup';
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
  plugins: [
    // @ts-ignore
    {
      enforce: 'pre',
      ...mdx({
        jsx: true,
        jsxImportSource: 'solid-js',
        providerImportSource: 'solid-mdx',
      }),
    },
    solid({ adapter: 'solid-start-vercel', extensions: ['.md', '.mdx'] }),
    unocss(),
  ],
});
