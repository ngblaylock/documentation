module.exports = {
    dest: 'docs',
    title: "Nathan's Docs",
    description: 'Just playing around',
    themeConfig: {
        smoothScroll: true,
        lastUpdated: 'Last Updated',
        nav: [{
                text: 'Home',
                link: '/'
            },
            {
                text: 'Vue.js',
                link: '/vue/'
            },
            {
                text: 'Other',
                link: '/other/'
            },
            {
                text: 'Portfolio',
                link: 'https://www.nathanblaylock.com'
            },
        ],
        sidebar: [
            {
              title: 'Vue.js',
              children: [
                '/vue/',
                '/vue/cli',
                '/vue/nuxt',
                '/vue/vuepress'
              ]
            },
            {
                title: 'Firebase',
                children: [
                    '/firebase/',
                    '/firebase/hosting',
                    '/firebase/authentication',
                    '/firebase/firestore'
                ]
            },
            {
                title: 'Other',
                children: [
                    '/other/',
                    '/other/extras',
                    '/other/bootstrap4',
                    '/other/fontawesome',
                    '/other/tabletopjs',
                    '/other/wow-animate',
                    '/other/vscode',
                    '/other/desktopapps'
                ]
            }
        ]
    },
    configureWebpack: {
        resolve: {
          alias: {
            '@alias': '/images'
          }
        }
      }
}