# 从零配置 webpack4 + react 脚手架

https://github.com/vortesnail/blog/issues/4

## 配置步骤

1. 基础配置
    - 安装 webpack、webpack-cli
    - webpack-merge 区分环境
2. babel 配置
   解析 jsx、es6
3. html 模板
4. 代码分片
    - optimization.splitChunks
      多 entry 入口 配合 splitChunks.cacheGroup 提取公共依赖
