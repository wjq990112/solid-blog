import { defineConfig } from '~';

export default defineConfig({
  lang: 'zh-CN',
  title: 'SoliDocs',
  description: 'Doc site powered by SolidJS.',
  themeConfig: {
    nav: [
      {
        text: 'HTML',
        link: '/blogs/html',
      },
      {
        text: 'CSS',
        link: '/blogs/css',
      },
      {
        text: 'JavaScript',
        link: '/blogs/javascript',
      },
    ],
  },
});
