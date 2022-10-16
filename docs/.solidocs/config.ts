import { defineConfig } from '~';

export default defineConfig({
  lang: 'zh-CN',
  title: 'Solid Blog',
  titleTemplate: 'A document site powered by SolidJS & SolidStart.',
  description: 'A document site powered by SolidJS & SolidStart.',
  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Solid Blog',
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
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wjq990112/solid-blog' },
      { icon: 'twitter', link: 'https://twitter.com/JackWang0112' },
    ],
    footer: {
      message:
        'Released under the MIT License and powered by SolidJS & SolidStart. ',
      copyright: 'Copyright © 2022-PRESENT Jack Wang',
    },
  },
});
