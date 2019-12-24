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
                '/vue/vuex',
                '/vue/nuxt',
                '/vue/vuepress'
              ]
            },
            {
                title: 'Firebase',
                children: [
                    '/firebase/',
                    '/firebase/hosting',
                    '/firebase/firestore',
                    '/firebase/authentication'
                ]
            },
            {
                title: 'Other',
                children: [
                    '/other/',
                    '/other/bootstrap4',
                    '/other/desktopapps',
                    '/other/extras',
                    '/other/fontawesome',
                    '/other/forms',
                    '/other/tabletopjs',
                    '/other/vscode',
                    '/other/wow-animate'
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