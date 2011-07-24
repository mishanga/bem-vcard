BEM.DOM.decl({ name: 'b-card' }, {

    onSetMod : {

        js : function() {

            var card = this,
                currentLink;

            $.each(this.findBlocksInside('switch', 'b-link'), function() {

                card.getMod('lang') == this.getMod('lang') &&
                    (currentLink = this.setMod('current', 'yes').setMod('disabled', 'yes'));

                this.on('click', function() {
                    card.setMod('lang', this.getMod('lang'));
                    currentLink.delMod('current').delMod('disabled');
                    currentLink = this.setMod('current', 'yes').setMod('disabled', 'yes');
                })

            });

        }

    }

});