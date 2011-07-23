({
    block: 'b-page',
    title: 'Михаил Трошев — mishanga@yandex-team.ru',
    favicon: '//yandex.ru/favicon.ico',
    head: { elem: 'css', url: 'vcard.css'},
    content: {
        block: 'b-card',
        content: {
            block: 'b-info',
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
