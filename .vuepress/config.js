module.exports = {
  dest: "docs",
  title: "Nathan's Docs",
  description: "Just playing around",
  themeConfig: {
    smoothScroll: true,
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
          "/vue/router",
          "/vue/vuex",
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
          "/firebase/securityrules",
          "/firebase/emulator"
        ]
      },
      {
        title: "Static Site Generators",
        children: [
          "/ssg/eleventy",
          "/ssg/nuxt",
          "/ssg/vuepress",
          "/ssg/sveltekit",
        ]
      },
      {
        title: "Toolkit",
        children: [
          "/toolkit/bootstrap",
          "/toolkit/css-snacks",
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
          "/other/linux",
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
