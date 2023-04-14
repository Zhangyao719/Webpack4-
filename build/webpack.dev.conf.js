const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const path = require('path');
const base = require('./webpack.base.conf.js');
const devServer = require('./config/devServer');

module.exports = merge(base, {
    mode: 'development',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js', // dev-server 开启热更新, 导出不能使用 chunkhash (可以用 hash 替代)
        chunkFilename: 'chunk.[name].js',

        // 按需加载文件 或 加载外部资源(图片/文件)时, 指定这些资源的请求位置, 以 '/' 结尾。
        // 设 devServer.publicPath = '/dist/', 则当前 html 地址为 http://127.0.0.1:8080/dist/index.html
        // 那么 html 中脚本加载的 src 地址 = publicPath + 配置路径, 有一下几种:
        // 1. 默认 '', 跟随 html 路径,   地址: http://127.0.0.1:8080/dist/0.chunks.js       结果: 能访问到
        // 2. 以 './js' 相对 html 目录,  地址: http://127.0.0.1:8080/dist/js/0.chunks.js    结果: 失败
        // 3. 以 '/js' 开头, host 为准   地址: http://127.0.0.1:8080/js/0.chunks.js         结果: 失败
        // 3. 以 '/dist/' 开头,          地址: http://127.0.0.1:8080/dist/0.chunks.js       结果: 能访问到，和 '' 结果一样
        // 4. 以 CDN 开头,               地址: https://cdn.com/0.chunks.js                  结果: cdn 上有就可以
        // 所以 publicPath 要么不设, 要么和 devServer.publicPath 一致, 要么发 CDN
        // publicPath: '/dist/',
    },
    devServer,
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css', // 同步加载的 css 资源名
            chunkFilename: 'css/[id].css', // 异步加载的 css 资源名
            ignoreOrder: true, // 禁用 css order 警告 https://webpack.docschina.org/plugins/mini-css-extract-plugin/#remove-order-warnings
        }),
    ],
});
