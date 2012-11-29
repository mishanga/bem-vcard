all:: bem-bl
all:: node_modules
all:: $(patsubst %.bemjson.js,%.html,$(wildcard pages/*/*.bemjson.js))

PREFIX = $(shell pwd)/node_modules/.bin
BEM ?= $(PREFIX)/bem

BEM_BUILD = $(BEM) build \
	-l bem-bl/blocks-common/ \
	-l bem-bl/blocks-desktop/ \
	-l blocks/ \
	-l $(*D)/blocks/ \
	-d $< \
	-t $1 \
	-o $(@D) \
	-n $(*F)

BEM_CREATE = $(BEM) create block \
	-l pages \
	-t $1 \
	$(*F)

%.html: %.bemhtml.js %.css %.js
	rm -f $@
	$(call BEM_CREATE,bem-bl/blocks-common/i-bem/bem/techs/html.js)

%.bemhtml.js: %.deps.js
	$(call BEM_BUILD,bem-bl/blocks-common/i-bem/bem/techs/bemhtml.js)

%.deps.js: %.bemdecl.js
	$(call BEM_BUILD,deps.js)

%.bemdecl.js: %.bemjson.js
	$(call BEM_CREATE,bemdecl.js)

.PRECIOUS: %.css
%.css: %.deps.js
	$(call BEM_BUILD,.bem/techs/css.js)
	$(PREFIX)/csso $@ | gzip -cf9 >$@.gz

.PRECIOUS: %.ie.css
%.ie.css: %.deps.js
	$(call BEM_BUILD,.bem/techs/ie.css.js)
	$(PREFIX)/csso $@ | gzip -cf9 >$@.gz

.PRECIOUS: %.js
%.js: %.deps.js
	$(call BEM_BUILD,js)
	$(PREFIX)/uglifyjs $@ | gzip -cf9 >$@.gz

DO_GIT=echo -- git $1 $2; \
	if [ -d $2 ]; \
		then \
			cd $2 && git pull origin master; \
		else \
			git clone $1 $2; \
	fi

bem-bl:
	$(call DO_GIT,git://github.com/bem/bem-bl.git --branch 0.3,$@)

node_modules:
	@npm cache clean
	@npm prune
	@npm update

.PHONY: server
server: node_modules
	$(PREFIX)/bem server

.PHONY: clean
clean:
	-rm -rf bem-bl node_modules
	git ls-files --others --ignored --exclude-standard | xargs -I {} rm -f {}


.PHONY: all
