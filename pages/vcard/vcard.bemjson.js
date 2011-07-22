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
                        url: '//yandex.st/lego/_/X31pO5JJJKEifJ7sfvuf3mGeD_8.png'
                    }
                },
                { elem: 'text' }
            ]
        }
    }
})
