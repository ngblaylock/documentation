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
        title: "Toolkit",
        children: [
          "/toolkit/bootstrap",
          "/toolkit/databases",
          "/toolkit/fontawesome",
          "/toolkit/forms",
          "/toolkit/github",
          "/toolkit/js-snacks",
          "/toolkit/vscode"
        ]
      },
      {
        title: "Other",
        children: [
          "/other/desktopapps",
          "/other/extras",
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
