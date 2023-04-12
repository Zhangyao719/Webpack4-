const merge = require('webpack-merge');
var shell = require('shelljs');
const path = require('path');
const base = require('./webpack.base.conf.js');

shell.rm('-rf', path.resolve(__dirname, '../dist'));

module.exports = merge(base, {
    mode: 'production',
});
