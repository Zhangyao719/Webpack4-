const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// 抽离 style-loader + css-loader + postcss-loader 公共处理
exports.getCSSLoaders = ({ isExtract = true, cssLoaderOptions } = {}) => [
    isExtract ? MiniCssExtractPlugin.loader : 'style-loader',
    {
        loader: 'css-loader',
        options: {
            // https://v4.webpack.docschina.org/loaders/css-loader#root
            // todo: source-map: true
            importLoaders: 1,
            ...cssLoaderOptions,
        },
    },
    {
        loader: 'postcss-loader',
        options: {
            // 如果是3.0即以下版本 请查看这个文档: https://v4.webpack.docschina.org/loaders/postcss-loader#postcss-options
            // 这里用的版本是4+ 文档: https://webpack.docschina.org/loaders/postcss-loader#postcssoptions
            implementation: require('postcss'),
            postcssOptions: {
                plugins: [
                    // 修复一些和 flex 布局相关的 bug
                    require('postcss-flexbugs-fixes'),
                    require('postcss-preset-env')({
                        autoprefixer: {
                            grid: true,
                            flexbox: 'no-2009',
                        },
                        stage: 3,
                    }),
                    require('postcss-normalize'),
                ],
            },
            // todo: source-map: true
        },
    },
];
