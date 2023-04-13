module.exports = {
    // bundle 资源可在此约定的路径下被访问到, `http://127.0.0.1:9000/${publicPath}main.js`
    // 注意: 和 output.path 没任何关系
    publicPath: '/',
    open: true,
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
