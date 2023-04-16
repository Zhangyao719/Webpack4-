'use strict';
const devServer = require('./devServer');

const development = {
    devtool: 'cheap-module-eval-source-map', // 简化版 source-map, 开发适用
    devServer,
    sourceMap: true,
    cssSourceMap: true,
};

const production = {
    // No SourceMap is emitted. This is a good option to start with.
    // source-map: 不安全, 除非通过 Nginx 设置, 将 .map 文件只对固定的白名单(公司内网)开放
    // hidden-source-map: 不会在 bundle 文件中添加对 map 文件的引用, 而要将 map 文件上传至第三方错误跟踪平台
    // nosources-source-map: 能看到源码目录结构, 但具体内容会隐藏, 基本够用, 相对安全
    // 在使用 terser-webpack-plugin 时，你必须提供 sourceMap：true 选项来启用 source map 支持。
    devtool: false,
    sourceMap: false,
    cssSourceMap: false,
};

module.exports = {
    development,
    production,
};
