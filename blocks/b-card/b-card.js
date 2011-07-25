BEM.DOM.decl({ name: 'b-card' }, {

    onSetMod : {

        js : function() {

            var card = this,
                currentLink,
                cache = {};

            $.each(this.findBlocksInside('switch', 'b-link'), function() {

                card.getMod('lang') == this.getMod('lang') &&
                    (currentLink = this.setMod('current', 'yes').setMod('disabled', 'yes'));

                this.on('click', function() {
                    var lang = this.getMod('lang');

                    card.setMod('lang', lang);

                    currentLink.delMod('current').delMod('disabled');
                    currentLink = this.setMod('current', 'yes').setMod('disabled', 'yes');

                    if(!cache[lang]) {
                        var info = card.findBlockOn(
                                card.findElem('side', 'lang', lang),
                                'b-card-layout')
                                    .findBlockInside('b-info');
                        cache[lang] = info.elem('name').text() + ' — ' + info.elem('email').text();
                    }
                    document.title = cache[lang];
                })

            });

        }

    }

});
