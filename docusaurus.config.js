// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const gitRepoBaseUrl =
  "https://github.com/OfferZen-Community/developer-mentoring";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "The Developer Mentoring Guide",
  tagline: "Helping devs help devs",
  url: "https://www.developermentoring.guide",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.svg",
  organizationName: "offerzen", // Usually your GitHub org/user name.
  projectName: "developer-mentoring-guide", // Usually your repo name.

  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        // Options here
      },
    ],
    [
      require.resolve("docusaurus-gtm-plugin"),
      {
        id: "GTM-TZVBNJD", // GTM Container ID
      },
    ],
    [
      require.resolve("@docusaurus/plugin-ideal-image"),
      {
        quality: 70,
        max: 1200,
        min: 640,
        steps: 2,
        disableInDev: false,
      },
    ],
  ],

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: `${gitRepoBaseUrl}/blob/main/`,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          editUrl: `${gitRepoBaseUrl}/blob/main/`,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "OfferZen Logo",
          src: "img/logo.png",
          srcDark: "img/logo_white.png",
        },
        items: [
          {
            type: "doc",
            docId: "introduction/welcome",
            position: "left",
            label: "The Guide",
          },
          {
            href: gitRepoBaseUrl,
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub",
          },
        ],
        hideOnScroll: true,
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "The Guide",
                to: "/docs/introduction/welcome",
              },
              {
                html: '<iframe src="https://ghbtns.com/github-btn.html?user=OfferZen-Community&repo=developer-mentoring&type=star&count=true&size=large" frameborder="0" scrolling="0" width="170" height="30" title="GitHub"></iframe>',
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "OfferZen Community",
                href: "https://www.offerzen.com/community",
              },
              {
                label: "Sign up for Project Thrive",
                href: "https://www.offerzen.com/foundation",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                href: "https://www.offerzen.com/blog",
              },
              {
                label: "GitHub",
                href: gitRepoBaseUrl,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OfferZen Community. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      announcementBar: {
        id: "support_us",
        content:
          '<font size="+0.5">We\'re looking for senior devs to come mentor in our <b>October</b> cohort! 👉 Sign up for free <a target="_blank" rel="noopener noreferrer" href="https://www.offerzen.com/thrive/mentors">here</a>,</font>',
        backgroundColor: "#2F96F4",
        textColor: "#FFFFFF",
        isCloseable: false,
      },
    }),
};

module.exports = config;
