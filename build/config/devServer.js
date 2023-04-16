module.exports = {
    // bundle 资源可在此约定的路径下被访问到, `http://127.0.0.1:9000/${publicPath}main.js`
    // 注意: 和 output.path 没任何关系
    publicPath: '/',

    // 使用 H5 History API 时 (比如 react-router-dom BrowserRouter), 会出现刷新 404 问题
    // 原因: 因为并没有任何的实际文件资源与之匹配
    // 解决: 所有 404 的请求应该始终指向 index.html，链接 https://v4.webpack.docschina.org/configuration/dev-server/#devserver-historyapifallback
    historyApiFallback: {
        rewrites: [
            {
                from: /\//,
                to: '/index.html', // 注意! 如果设置了publicPath, 则需要: `${publicPath}index.html`
            },
        ],
    },
    open: true,
    host: '127.0.0.1',
    port: 9000,
    compress: true,
    hot: true,
    overlay: { warnings: false, errors: true }, // 当出现编译错误或警告时，在浏览器中显示全屏覆盖
    disableHostCheck: true, // 绕过 host 检查, 该选项允许将 "允许访问开发服务器的服务" 列入白名单。
    quiet: false, // 启用后, 来自 webpack 的错误或警告在控制台不可见
    stats: 'minimal', // 终端只在发生错误或有新的编译时输出 https://v4.webpack.docschina.org/configuration/stats
    clientLogLevel: 'info', // 日志等级
    // proxy,
    // before,
};
