import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Documentation",
  description: "Nathan Blaylock Media",
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/nb-docs.png',
    nav: [
      { text: "Firebase", link: "/firebase/getting-started" },
      { text: "Eleventy", link: "/ssg/eleventy" },
      { text: "Nuxt", link: "/ssg/Nuxt" },
      { text: "Sveltekit", link: "/ssg/Sveltekit" },
    ],

    sidebar: [
      {
        text: "Static Site Generators",
        items: [
          { text: "Eleventy", link: "/ssg/eleventy" },
          { text: "Nuxt", link: "/ssg/nuxt" },
          { text: "Sveltekit", link: "/ssg/sveltekit" },
        ],
      },
      {
        text: "Firebase",
        items: [
          { text: "Getting Started", link: "/firebase/getting-started" },
          { text: "Authentication", link: "/firebase/authentication" },
          { text: "Emulator", link: "/firebase/emulator" },
          { text: "Firestore", link: "/firebase/firestore" },
          { text: "Hosting", link: "/firebase/hosting" },
          { text: "Security Rules", link: "/firebase/security-rules" },
          { text: "Storage", link: "/firebase/storage" },
        ],
      },
      {
        text: "Toolkit",
        items: [
          { text: "Bootstrap", link: "/toolkit/bootstrap" },
          { text: "CSS Snacks", link: "/toolkit/css-snacks" },
          { text: "Forms", link: "/toolkit/forms" },
          { text: "GitHub", link: "/toolkit/github" },
          { text: "Icons", link: "/toolkit/icons" },
          { text: "JS Snacks", link: "/toolkit/js-snacks" },
          { text: "VS Code", link: "/toolkit/vscode" },
        ],
      },
      {
        text: "Other",
        items: [
          { text: "Desktop Apps", link: "/other/desktop-apps" },
          { text: "Extras", link: "/other/extras" },
          { text: "Zorin OS", link: "/other/zorin" },
        ],
      },
    ],

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/ngblaylock" },
    ],
  },
});
