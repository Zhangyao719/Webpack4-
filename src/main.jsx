import React from 'react';
import ReactDOM from 'react-dom';
import App from './app.jsx';

// 热更新优化 (不会刷新整个页面)
// module https://v4.webpack.docschina.org/api/module-variables#module-hot-webpack-specific-
// module.hot https://v4.webpack.docschina.org/api/hot-module-replacement
if (module && module.hot) {
    module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById('root'));
