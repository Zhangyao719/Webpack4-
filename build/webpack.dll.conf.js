const path = require('path');
const webpack = require('webpack');
var shell = require('shelljs');

shell.rm('-rf', path.join(__dirname, './dll'));

module.exports = {
    mode: 'production',
    entry: {
        vendor: [
            'react',
            'react-dom',
            'react-router-dom',
            'dayjs',
            // 'moment',
            // 'history',
            // 'react-redux',
            // 'react-tracked',
            // '@reduxjs/toolkit',
            // 'use-immer',
            // 'use-reducer-async',
            // 'dayjs',
            // 'axios',
            // 'qs',
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    output: {
        filename: '[name]-[hash:6].dll.js',
        path: path.join(__dirname, '/dll/'),
        library: '[name][hash:6]',
    },
    plugins: [
        new webpack.DllPlugin({
            context: process.cwd(), // manifest缓存文件的请求上下文（默认为webpack执行环境上下文）
            path: path.join(__dirname, '/dll/[name]-manifest.json'), // 资源清单（manifest.json）的输出位置
            name: '[name][hash:6]', // 导出的动态链接库的名字，与 output.library 一致
        }),
    ],
};
