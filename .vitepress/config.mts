import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Documentation",
  description: "Nathan Blaylock Media",
  cleanUrls: true,
  srcDir: './pages',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/nb-docs.png',
    nav: [
      { text: "Eleventy", link: "/ssg/eleventy" },
      { text: "Nuxt", link: "/ssg/nuxt" },
      { text: "SvelteKit", link: "/ssg/sveltekit" },
      { text: "Firebase", link: "/firebase/" },
      { text: "Checklist", link: "/other/static-site-checklist" },
    ],

    sidebar: [
      {
        text: "Static Site Generators",
        collapsed: true,
        items: [
          { text: "Eleventy", link: "/ssg/eleventy" },
          { text: "Nuxt", link: "/ssg/nuxt" },
          { text: "Sveltekit", link: "/ssg/sveltekit" },
        ],
      },
      {
        text: "Firebase",
        collapsed: true,
        items: [
          { text: "Getting Started", link: "/firebase/" },
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
        collapsed: true,
        items: [
          { text: "Bootstrap 4", link: "/toolkit/bootstrap-4" },
          { text: "Bootstrap 5", link: "/toolkit/bootstrap-5" },
          { text: "CSS Snacks", link: "/toolkit/css-snacks" },
          { text: "Documentation Standards", link: "/toolkit/documentation-standards" },
          { text: "Forms", link: "/toolkit/forms" },
          { text: "GitHub", link: "/toolkit/github" },
          { text: "Icons", link: "/toolkit/icons" },
          { text: "JS Snacks", link: "/toolkit/js-snacks" },
          { text: "VS Code", link: "/toolkit/vscode" },
        ],
      },
      {
        text: "Other",
        collapsed: true,
        items: [
          { text: "Cloudflare", link: "/other/cloudflare" },          
          { text: "Extras", link: "/other/extras" },
          { text: "Mac", link: "/other/mac" },
          { text: "PWA", link: "/other/pwa" },
          { text: "Static Site Checklist", link: "/other/static-site-checklist" },
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
