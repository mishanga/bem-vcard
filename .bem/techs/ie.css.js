var fs = require('fs'),
    INHERIT = require('inherit'),
    Tech = require('bem/lib/techs/css').Tech;

exports.Tech = INHERIT(Tech, {

    getBuildResultChunk: function(relPath, path, suffix) {
        return [
                '/* ' + relPath + ': begin */ /**/\n',
                fs.readFileSync(path),
                '/* ' + relPath + ': end */ /**/\n\n'
            ].join('');
    }

});
