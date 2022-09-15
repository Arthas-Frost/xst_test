'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BASE_API: '"http://shijie.youaremydestiny.top/"'//生产环境
  //BASE_API:'"http://hospital.xiaomiqiu.com"',
})
