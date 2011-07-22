({
    block: 'b-page',
    title: 'Михаил Трошев — mishanga@yandex-team.ru',
    head: [
        { elem: 'css', url: 'vcard.css'},
        { elem: 'favicon', url: '//yandex.ru/favicon.ico' }
    ],
    content: {
        block: 'b-card',
        content: {
            block: 'b-info',
            mix: [{ block: 'i-font', mods: { face: 'textbook-new' } }],
            content: [
                {
                    elem: 'logo',
                    content: {
                        block: 'b-image',
                        url: '/blocks/b-image/b-image__yandex.png'
                    }
                },
                { elem: 'text' }
            ]
        }
    }
})
