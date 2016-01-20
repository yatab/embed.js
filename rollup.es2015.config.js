var babel    = require('rollup-plugin-babel');
var commonjs = require('rollup-plugin-commonjs');
var npm      = require('rollup-plugin-npm');
var replace  = require('rollup-plugin-replace');
var build    = require('./build.json');
var pkg      = require('./package.json');

var banner = "/*\n" +
            " * " +  pkg.name + " - v"+ pkg.version +"\n" +
            " * " +  pkg.description +"\n" +
            " * " + pkg.homepage +"\n" +
            " *\n" +
            " *   Made by "+ pkg.author.name +"\n" +
            " *   Under "+ pkg.license +" License\n" +
            " */\n"


var config = {
    entry         : 'src/js/embed.es6',
    dest          : 'src/embed.es2015.js',
    format        : 'es6',
    banner        : banner,
    sourceMap     : true,
    useStrict     : true,
    sourceMapFile : './src/embed.es6.js',
    plugins: [
        npm({
            jsnext : true,
            main   : true
        }),
        commonjs({
            include: 'node_modules/**'
        }),
        babel(),
        replace(build)
    ]
};

module.exports = config;
