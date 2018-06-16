module.exports = {
    title: 'Manaic的小说',
    description: '来都来了 进来坐坐吧',
    themeConfig: {
        sidebar: 'auto',
        nav: [
            { text: '主页', link: '/' },
            { text: '纵情于酒色之人', link: '/noval/'},
            { text: '关于Maniac99', link: '/about/'}
        ],
        sidebar: {
            '/noval/': [
                '',
                'Chapter1'
            ]
        }

    }
}