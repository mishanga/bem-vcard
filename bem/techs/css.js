var fs = require('fs'),
    css = require('bem/lib/techs/css');

for (var n in css) exports[n] = css[n];

exports.techModule = module;

exports.outFile = function (relFile, file) {
    return [
        '/* ' + relFile + ': begin */ /**/',
        fs.readFileSync(file),
        '/* ' + relFile + ': end */ /**/',
        '\n'].join('\n');
};
