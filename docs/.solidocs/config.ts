import { defineConfig } from '~';

export default defineConfig({
  lang: 'zh-CN',
  title: 'Solid Blog',
  description: 'Doc site powered by SolidJS.',
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
  },
});
