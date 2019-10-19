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
              title: 'Vue.js',   // required
              children: [
                '/vue/',
                '/vue/cli',
                '/vue/nuxt',
                '/vue/vuepress'
              ]
            },
            {
                title: 'Firebase',   // required
                children: [
                    '/firebase/',
                    '/firebase/authentication',
                    '/firebase/hosting',
                    '/firebase/firestore'
                ]
            },
            {
                title: 'Other',
                children: [
                    '/other/',
                    '/other/fontawesome',
                    '/other/tabletopjs',
                    '/other/wow-animate',
                    '/other/vscode',
                    '/other/desktopapps'
                ]
            }
        ]
    }
}