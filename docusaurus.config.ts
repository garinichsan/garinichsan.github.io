import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'garinichsan',
  tagline: 'DevOps Engineer',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://garinichsan.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  projectName: 'garinichsan.github.io', // Usually your repo name.
  organizationName: 'garinichsan', // Usually your GitHub org/user name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'id'],
  },

  plugins: [
    ['vercel-analytics',{}],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        gtag: {
          trackingID: 'G-58Z5N0KHLX',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'dark'
    },
    navbar: {
      title: 'garinichsan',
      logo: {
        alt: 'garinichsan',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left'},
        {
          href: 'https://github.com/garinichsan',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Writings',
          items: [
            {
              label: 'Docs',
              to: '/docs',
            },
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
        {
          title: 'About Me',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/garinichsan/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/garinichsan',
            },
            {
              label: 'X Twitter',
              href: 'https://twitter.com/garinichsan',
            },
          ],
        },
        {
          title: "Tools",
          items: [
            {
              label: "Docusaurus",
              href: "https://docusaurus.io",
            },
            {
              label: "GitHub Pages",
              href: "https://pages.github.com",
            },
          ],
        },
        {
          title: "License",
          items: [
            {
              html: `<a href="https://creativecommons.org/licenses/by-sa/4.0/" target="_blank"><img src="https://mirrors.creativecommons.org/presskit/buttons/88x31/png/by-sa.png" alt="CC BY-SA License" height="40px" width="114px" ></a>`,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} garinichsan. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
