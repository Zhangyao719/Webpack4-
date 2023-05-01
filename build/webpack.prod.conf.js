const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const GzipPlugin = require('compression-webpack-plugin');
var shell = require('shelljs');
const path = require('path');
const base = require('./webpack.base.conf.js');
const { PROJECT_DIST_PATH, production: config } = require('./config');

shell.rm('-rf', path.resolve(__dirname, '../dist'));

module.exports = merge(base, {
    mode: 'production',
    output: {
        path: PROJECT_DIST_PATH,
        filename: 'js/[name].[chunkhash:8].js',
        chunkFilename: 'js/chunk.[name].js', // 指定异步 chunk 的文件名, name 为 /* webapckChunkName: "xxx" */ 中的名字
        publicPath: config.assetsPublicPath,
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash:8].css',
            chunkFilename: 'css/[id].[hash:8].css',
            ignoreOrder: false,
        }),
        // https://segmentfault.com/q/1010000012377236
        // 需要服务器进行 gzip 配置
        new GzipPlugin({
            test: /\.(js|css)(\?.*)?$/i,
            exclude: /node_modules/,
            threshold: 10240,
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerHost: '127.0.0.1',
            analyzerPort: 8888,
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                exclude: /node_modules/,
                cache: true,
                parallel: true, // 强烈建议开启多进程压缩
                terserOptions: {
                    // https://github.com/terser/terser#minify-options
                    compress: { pure_funcs: ['console.log'] }, // 删除 console.log 语句
                    output: {
                        comments: false, // 删除 "@license", "@copyright", "@preserve" 这种开头
                        beautify: false,
                    },
                },
            }),
        ],
    },
});
