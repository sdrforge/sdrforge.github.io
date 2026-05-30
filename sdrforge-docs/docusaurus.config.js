// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SDRForge Docs',
  tagline: 'Safe and legal SDR training',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://sdrforge.github.io',
  baseUrl: '/',

  organizationName: 'sdrforge',
  projectName: 'sdrforge.github.io',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: ({
    image: 'img/SDRLogoDark.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'SDRForge Docs',
      logo: {
        alt: 'SDRForge Logo',
        src: 'img/SDRLogoDark.png',
      },
      items: [
        {
          href: 'https://github.com/blackhillsinfosec/SDRForge',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Made with ❤️ by Black Hills Infosec`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;