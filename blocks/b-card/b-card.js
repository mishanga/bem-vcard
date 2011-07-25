BEM.DOM.decl({ name: 'b-card' }, {

    onSetMod : {

        js : function() {

            var card = this,
                currentLink,
                sides = {}, // текущие состояния сторон
                titles = {};

            titles[card.getMod('lang')] = document.title;

            $.each(this.findBlocksInside('switch', 'b-link'), function() {

                card.getMod('lang') == this.getMod('lang') && (currentLink = this);

                this.on('click', function() {
                    var lang = this.getMod('lang');

                    card.setMod('lang', lang);

                    // сбрасываем состояние для стороны, закрытой в прошлой итерации
                    sides.closed && card.delMod(sides.closed, 'state');

                    this.afterCurrentEvent(function() {
                        // закрываем открытую сторону
                        sides.closed = sides.opened || card.elem('side', 'state', 'opened');
                        card.setMod(sides.closed, 'state', 'closed');

                        // открываем нужную сторону
                        sides.opened = card.elem('side', 'lang', lang);
                        card.setMod(sides.opened, 'state', 'opened');
                    });

                    currentLink.delMod('current').delMod('disabled');
                    currentLink = this.setMod('current', 'yes').setMod('disabled', 'yes');

                    if(!titles[lang]) {
                        var info = card.findBlockOn(
                                card.findElem('side', 'lang', lang),
                                'b-card-layout')
                                    .findBlockInside('b-info');
                        titles[lang] = info.elem('name').text() + ' — ' + info.elem('email').text();
                    }
                    document.title = titles[lang];
                })

            });

        }

    }

});
