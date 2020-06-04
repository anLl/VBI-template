const webpackMerge = require('webpack-merge')
const webpackBase = require('./webpack.config.base')

module.exports=webpackMerge(webpackBase,{
    mode:'development',
    devServer:{
        port:9999,
        host:'0.0.0.0',
        stats:'errors-only',
        contentBase:'dist',
    },
    devtool:'cheap-module-eval-source-map'
})