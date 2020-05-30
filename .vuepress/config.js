module.exports = {
  dest: "docs",
  title: "Nathan's Docs",
  description: "Just playing around",
  themeConfig: {
    smoothScroll: true,
    lastUpdated: "Last Updated",
    nav: [
      {
        text: "Home",
        link: "/"
      },
      {
        text: "Vue.js",
        link: "/vue/"
      },
      {
        text: "Firebase",
        link: "/firebase/"
      },
      {
        text: "Other",
        link: "/other/"
      },
      {
        text: "Portfolio",
        link: "https://www.nathanblaylock.com"
      }
    ],
    sidebar: [
      {
        title: "Vue.js",
        children: [
          "/vue/",
          "/vue/cli",
          "/vue/meta",
          "/vue/nuxt",
          "/vue/router",
          "/vue/vuex",
          "/vue/vuepress"
        ]
      },
      {
        title: "Firebase",
        children: [
          "/firebase/",
          "/firebase/hosting",
          "/firebase/authentication",
          "/firebase/firestore",
          "/firebase/storage",
          "/firebase/securityrules"
        ]
      },
      {
        title: "Other",
        children: [
          "/other/",
          "/other/bootstrap4",
          "/other/desktopapps",
          "/other/extras",
          "/other/fontawesome",
          "/other/forms",
          "/other/github",
          "/other/css-snacks",
          "/other/js-snacks",
          "/other/tabletopjs",
          "/other/vscode"
        ]
      }
    ]
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@alias": "/images"
      }
    }
  }
};
