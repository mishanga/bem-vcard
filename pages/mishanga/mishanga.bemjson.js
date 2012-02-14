({
    block: 'b-page',
    title: 'Михаил Трошев — mishanga@yandex-team.ru',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: 'mishanga.css' },
        { elem: 'css', url: 'mishanga.ie.css', ie: 'lte IE 7' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: 'mishanga.js' }
    ],
    i18n: { langs: ['ru', 'en'], lang: 'ru' },
    content: {
        block: 'b-card',
        mods: { lang: 'ru' },
        content: [
            {
                block: 'b-card-layout',
                lang: 'ru',
                info: {
                    name: 'Михаил Трошев',
                    position: 'Руководитель группы разработки<br>поисковых интерфейсов',
                    company: {
                        country: 'Россия',
                        locality: 'Москва',
                        zip: '119021',
                        address: 'ул. Льва Толстого, д. 16',
                        phone: '+7 (495) 739-70-00',
                        'phone-add': '6449',
                    //  fax: '+7 (495) 739-70-70',
                        site: 'www.yandex.ru'
                    },
                    person: {
                        email: 'mishanga@yandex-team.ru',
                        cellular: '+7 (926) 226-74-29',
                    //  skype: 'mishanga',
                        github: 'mishanga'
                    }
                }
            },
            {
                block: 'b-card-layout',
                lang: 'en',
                info: {
                    name: 'Mikhail Troshev',
                    position: 'Team lead of search interfaces<br>development group',
                    company: {
                        country: 'Russia',
                        locality: 'Moscow',
                        zip: '119021',
                        address: '16, Leo Tolstoy St.',
                        phone: '+7 (495) 739-70-00',
                        'phone-add': '6449',
                        site: 'www.yandex.com'
                    },
                    person: {
                        email: 'mishanga@yandex-team.ru',
                        cellular: '+7 (926) 226-74-29',
                        github: 'mishanga'
                    }
                }
            }
        ]
    }
})
