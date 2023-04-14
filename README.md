# 从零配置 webpack4 + react 脚手架

https://github.com/vortesnail/blog/issues/4

https://github.com/vortesnail/blog/issues/14

所有的依赖都请注意版本！

## commit 提交的步骤及内容

### 1. 基础配置

- 安装 webpack、webpack-cli
- webpack-merge 区分环境

### 2. babel 配置

- 目的：解析 jsx、es6
- 将 babel-loader 的 options 中 `presets` 和 `plugins `两个配置单独抽取到 `.babelrc` 文件中

### 3. html 模板

### 4. 代码分片

- optimization.splitChunks
  多 entry 入口 配合 splitChunks.cacheGroup 提取公共依赖

### 5. 区分环境

- cross-env 添加 process 环境变量
- DefinePlugin 添加项目中的环境变量

### 6. devServer 基础配置

- webpack 4 请使用 v3+ 的版本

### 7. devServer 优化

- 解决 browser history 404 问题

### 8. devServer 优化

- HMR 无刷新配置，在文件入口添加 module.hot 判断

  ```js
  // main.js
  if (module && module.hot) {
      module.hot.accept();
  }
  ```

### 9. 解析样式文件

- css 解析：style-loader + css-loader
- css 分离：mini-css-extract-plugin (webpack 4 请使用 v1+ 的版本)

### 10. sass 的解析

- node-sass 版本: v4.14+
- sass-loader 版本: v10+

### 11. postcss 处理浏览器兼容

- postcss-loader v3 即以下

  配置文档: https://v4.webpack.docschina.org/loaders/postcss-loader#postcss-options 

- postcss-loader v4+

  配置文档: https://webpack.docschina.org/loaders/postcss-loader#postcssoptions 

  版本变动:

  1. options 配置项；
  2. 需要安装 `postcss`；
  3. 移除 `postcss.config.js`的写法，请在`package.json` 中添加 `browserslist `。

  