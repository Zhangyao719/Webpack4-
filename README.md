# 从零配置 webpack4 + react 脚手架

https://github.com/vortesnail/blog/issues/4

https://github.com/vortesnail/blog/issues/14

所有的依赖都请注意版本！

## commit 提交的步骤及内容

### 1. 基础配置

-   安装 webpack、webpack-cli
-   webpack-merge 区分环境

### 2. babel 配置

-   目的：解析 jsx、es6
-   将 babel-loader 的 options 中 `presets` 和 `plugins `两个配置单独抽取到 `.babelrc` 文件中

### 3. html 模板

### 4. 代码分片

-   optimization.splitChunks
    多 entry 入口 配合 splitChunks.cacheGroup 提取公共依赖

### 5. 区分环境

-   cross-env 添加 process 环境变量
-   DefinePlugin 添加项目中的环境变量

### 6. devServer 基础配置

-   webpack 4 请使用 v3+ 的版本

### 7. devServer 优化

-   解决 browser history 404 问题

### 8. devServer 优化

-   HMR 无刷新配置，在文件入口添加 module.hot 判断

    ```js
    // main.js
    if (module && module.hot) {
        module.hot.accept();
    }
    ```

### 9. 解析样式文件

-   css 解析：style-loader + css-loader
-   css 分离：mini-css-extract-plugin (webpack 4 请使用 v1+ 的版本)

### 10. sass 的解析

-   node-sass 版本: v4.14+
-   sass-loader 版本: v10+

### 11. postcss 处理浏览器兼容

-   postcss-loader v3 即以下

    配置文档: https://v4.webpack.docschina.org/loaders/postcss-loader#postcss-options

-   postcss-loader v4+

    配置文档: https://webpack.docschina.org/loaders/postcss-loader#postcssoptions

    版本变动:

    1. options 配置项；
    2. 需要安装 `postcss`；
    3. 移除 `postcss.config.js`的写法，请在`package.json` 中添加 `browserslist `。

### 12. 处理图片等文件

-   url-loader + file-loader

### 13. 处理 css 中图片路径错误的问题

https://www.cnblogs.com/wonyun/p/11038417.html

**场景**：

1. `MiniCssExtractPlugin ` 中添加了目录前缀配置，会使 打包出的 css 文件放在 css 目录下。比如：

    ```js
    {
    	plugins: [
            new MiniCssExtractPlugin({
                filename: 'css/[name].css',
                chunkFilename: 'css/[id].css',
            }),
        ],
    }
    ```

2. `url-loader` 配置, 其中 `outputPath` 是一个相对路径

    ```js
    {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
            loader: 'url-loader',
                options: {
                    limit: 1024 * 5,
                    name: '[name].[hash:8].[ext]',
                    outputPath: 'assets', // 指定要放置目标文件的文件系统路径, 即 'dist' 目录下的路径
                },
    }
    ```

此时，在 css 中使用 `background-image: url(../xxx) `导入图片后，会发现图片的路径 `http://localhost:9000/css/assets/bgi.419d3e23.png ` 中会多出 `/css/` 导致图片加载失败。

**原因**：

图片的相对地址为`'assets/images/...'` ，而 css 中引入了该图片地址，导致该图片的相对地址其实是相对于该 css 文件的目录位置而言的，最终导致加载的图片地址为 `'css/assets/images/...'`

**解决**:

给 MiniCssExtractPlugin.loader(style-loader) 配置 `publicPath`，其目的就是当 css 文件需要加载引用资源时，指定其资源的路径。

```js
{
    loader: MiniCssExtractPlugin.loader,
    options: {
        publicPath: '../',
    },
},
```

这里的 `'../'` 是基于现实的 css 目录 和 assets 目录 得出来的, 因为项目中的结构是:

```js
dist
  ├ assets
  ├ css
  ├ js
  └ index.html
```

### 13. 使用 url-loader 处理字体文件

### 14. 配置 source-map 和 devtool

-   devtool 不同环境，对应的 source-map 不一样
-   css 相关处理也要额外添加 source-map 配置

### 15.更多 babel runtime 转译相关的配置

可系统拜读这篇文章: https://juejin.cn/post/6844904008679686152#heading-4

-   `@babel/preset-env`

    功能一：**新语法** 转译成 es5；

    功能二：**新特性** 通过搭配 @babel/polyfill (已弃用) 来实现转译。

    对于功能二需要一下配置：

    ```js
    npm install --save @babel/polyfill
    ```

    ```js
    // 需要在其它代码之前引入
    import '@babel/polyfill';
    ```

    ```js
    // .babelrc 优化配置
    [
        '@babel/preset-env',
        {
            useBuiltIns: 'usage', // 按需导入
            corejs: '3.0', // polyfill 需要安装的 core-js 版本
        },
    ];
    ```

    **缺点一**: babel 对每个文件的转译都会重新引用辅助函数（比如: \_classCallCheck，\_defineProperties 等），这会增加打包体积

    **缺点二**：污染原型链。

    **解决方法**：使用 `@babel/plugin-transform-runtime`

-   `@babel/plugin-transform-runtime`

    **优点一**：辅助函数的复用

    **优点二**：支持原型方法的同时，不污染原型链

    **优点三**：无需 polyfill

    ```js
    npm install @babel/runtime-corejs3 -S
    ```

    ```json
    {
        "plugins": [
            [
                "@babel/plugin-transform-runtime",
                {
                    "corejs": {
                        "version": 3,
                        "proposals": true
                    },
                    "useESModules": true
                }
            ]
        ]
    }
    ```

### 16.bundle 体积监控工具

-   webpackbar
-   webpack-bundle-analyzer
