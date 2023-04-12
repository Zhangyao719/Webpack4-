const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, '../src/main.jsx'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        // filename: '[name].[chunkhash].js',
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
};
