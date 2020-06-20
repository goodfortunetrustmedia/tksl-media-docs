module.exports = {
  title: "TKSL Media Docs",
  tagline: "Documentation for TKSL Media processes",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "goodfortunetrustmedia", // Usually your GitHub org/user name.
  projectName: "tksl-media-docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "TKSL Media Docs",
      logo: {
        alt: "Logo",
        src: "img/android-chrome-192x192.png",
      },
      links: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "http://tksl.org.au",
          label: "TKSL",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `${new Date().getFullYear()} TKSL Media`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "introduction",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
