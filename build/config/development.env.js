'use strict';
const merge = require('webpack-merge');
const prodEnv = require('./production.env');

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    BASE_URL: '"http://127.0.0.1:8080"',
});
