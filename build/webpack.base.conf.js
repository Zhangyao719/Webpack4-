const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, '../src/main.jsx'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[chunkhash:8].js',
        // publicPath: config[env].assetsPublicPath,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        // 启用缓存机制，在重复打包未改变过的模块时防止二次编译
                        cacheDirectory: true,
                        // presets 和 plugins 配置详见 .babelrc
                    },
                },
            },
        ],
    },
    plugins: [
        // https://github.com/jantimon/html-webpack-plugin#options
        // https://www.jianshu.com/p/2b872ae3362d 默认使用ejs渲染模板
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, '../public/index.html'), // 使用指定的渲染模板
            inject: 'body', // 指定静态资源插入到 HTML 中的位置 (所有js资源插入到<body>的底部)
            // 也可以添加自定义的属性...
            showFavicon: true,
        }),
    ],
};
