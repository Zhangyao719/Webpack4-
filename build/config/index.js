'use strict';
const path = require('path');

const PROJECT_PATH = path.resolve(__dirname, '../../');
const PROJECT_DIST_PATH = path.resolve(PROJECT_PATH, 'dist');
const PROJECT_SRC_PATH = path.resolve(PROJECT_PATH, 'src');
const PROJECT_PUBLIC_PATH = path.resolve(PROJECT_PATH, 'public');

const development = {
    assetsRoot: PROJECT_DIST_PATH, // 打包的根目录 dist
    assetsSubDirectory: 'assets', // 根目录下的静态资源目录
    assetsPublicPath: '/public/', // 资源请求的地址
    devtool: 'cheap-module-eval-source-map', // 简化版 source-map, 开发适用
    sourceMap: true,
    cssSourceMap: true,
};

const production = {
    assetsRoot: PROJECT_DIST_PATH,
    assetsSubDirectory: 'assets',
    assetsPublicPath: '/',
    devtool: false, // 如果启用, 在使用 terser-webpack-plugin 时，必须提供 sourceMap：true 选项来实现 source map 支持。
    sourceMap: false,
    cssSourceMap: false,
};

module.exports = {
    PROJECT_PATH,
    PROJECT_DIST_PATH,
    PROJECT_SRC_PATH,
    PROJECT_PUBLIC_PATH,
    development,
    production,
};
