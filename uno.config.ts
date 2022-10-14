import { defineConfig } from 'unocss/vite';
import presetUno from '@unocss/preset-uno';
import presetAttributify from '@unocss/preset-attributify';
import presetIcons from '@unocss/preset-icons';

export default defineConfig({
  preflights: [
    {
      getCSS: () => `body {
        margin: 0;
      }`,
    },
  ],
  safelist: [
    'discord',
    'facebook',
    'github',
    'instagram',
    'linkedin',
    'slack',
    'twitter',
    'youtube',
  ].map((icon) => `i-carbon-logo-${icon}`),
  presets: [presetUno(), presetAttributify(), presetIcons()],
});
