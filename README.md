# 从零配置 webpack4 + react 脚手架

https://github.com/vortesnail/blog/issues/4

## commit 提交的步骤及内容

1. 基础配置
    - 安装 webpack、webpack-cli
    - webpack-merge 区分环境
2. babel 配置
   解析 jsx、es6
3. html 模板
4. 代码分片
    - optimization.splitChunks
      多 entry 入口 配合 splitChunks.cacheGroup 提取公共依赖
5. 区分环境
    - cross-env 添加 process 环境变量
    - DefinePlugin 添加项目中的环境变量
6. devServer 基础配置
7. devServer 优化：解决 browser history 404 问题
8. devServer 优化：HMR 无刷新配置，在文件入口添加 module.hot 判断
9. 解析样式文件
    - css 解析：style-loader + css-loader
    - css 分离：mini-css-extract-plugin
