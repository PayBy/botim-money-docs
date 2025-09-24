// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/duotoneLight');
const darkCodeTheme = require('prism-react-renderer/themes/vsDark');
const mdxMermaid =require('mdx-mermaid')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Integrate Botim Money and Accept Payment',
  tagline: 'Botim Money, a flexible and fast payment solution to manage all business transactions.',
  url: 'https://developers.botim.money',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Botim Money', // Usually your GitHub org/user name.
  projectName: 'botim-money-docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        /**
         * 多实例插件必填。
         */
        id: 'demos',
        /**
         * 你的网站上博客的 URL 路由。
         * *请务必不要*添加末尾斜杠。
         */
        routeBasePath: 'demos',
        /**
         * 相对于站点目录的文件系统路径。
         */
        path: 'demos',
      },
    ],
  ],
  presets: [
    [
      'classic',
      // /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          remarkPlugins: [mdxMermaid],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  customFields: {
    // 把你的自定义环境放在这里
    env: process.env.NODE_ENV,
  },
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Developer',
        logo: {
          alt: 'Botim Money Developer Website',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            position: 'right',
            label: 'APIs',
            docId:'General/integration-guide'
          },
          // {to: '/blog', label: 'Blog', position: 'right'},
          {
            to: '/demos/overview',
            label: 'Demos',
            position: 'right',
            activeBaseRegex: `/demos/`,
          },
        ],
      },
      footer: {
        // style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Botim Money Technologies LLC. All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
   appId: 'MVWWMIWZ6I',
   apiKey: '93494b0157791fb872e41e0167771ac7',
   indexName: 'botim-money-docs',
   contextualSearch: true,}, 
    }),
};

module.exports = config;

module.exports = {
  // ...其他配置
  metadata: [
    {name: 'algolia-site-verification', content: '7D20847552B5581A'},
  ],
  // ...themeConfig等
};
