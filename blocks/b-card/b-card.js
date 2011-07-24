BEM.DOM.decl({ name: 'b-card' }, {

    onSetMod : {
        js : function() {
            var card = this;
            $.each(this.findBlocksInside('switch', 'b-link'), function() {
                this.on('click', function() {
                    card.setMod('lang', this.getMod('lang'));
                })
            });
        }
    }

});