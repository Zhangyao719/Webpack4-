const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin =
    require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var shell = require('shelljs');
const path = require('path');
const base = require('./webpack.base.conf.js');

shell.rm('-rf', path.resolve(__dirname, '../dist'));

module.exports = merge(base, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].[chunkhash:8].js',
        chunkFilename: 'js/chunk.[name].js', // 指定异步 chunk 的文件名, name 为 /* webapckChunkName: "xxx" */ 中的名字
        // publicPath: '//cdn.com.assets/', 线上环境, 资源一般发 CDN
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash:8].css',
            chunkFilename: 'css/[id].[hash:8].css',
            ignoreOrder: false,
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerHost: '127.0.0.1',
            analyzerPort: 8888,
        }),
    ],
});
