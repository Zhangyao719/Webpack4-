const merge = require('webpack-merge');
var shell = require('shelljs');
const path = require('path');
const base = require('./webpack.base.conf.js');

shell.rm('-rf', path.resolve(__dirname, '../dist'));

module.exports = merge(base, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[chunkhash:8].js',
        chunkFilename: 'chunk.[name].js', // 指定异步 chunk 的文件名, name 为 /* webapckChunkName: "xxx" */ 中的名字
        // publicPath: '//cdn.com.assets/', 线上环境, 资源一般发 CDN
    },
});
