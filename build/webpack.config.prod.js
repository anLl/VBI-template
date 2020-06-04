const path = require('path')
const webpackMerge = require("webpack-merge");
const webpackBase = require("./webpack.config.base");
const TerserPlugin = require("terser-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
function resolve(dir) {
  return path.resolve(__dirname, "..", dir);
}

module.exports = webpackMerge(webpackBase, {
  mode: "production",
  optimization: {
    minimizer: [
      new TerserPlugin({
        sourceMap: false,
        terserOptions: {
          compress: {
            drop_console: true,
            drop_debugger: true,
          },
        },
      }),
    ],
    splitChunks:{
        chunks:"all",
        cacheGroups:{
            "lib":{
                name:"chunk-libs",
                test:/[/]node_modules[/]/,
                priority:10,
                chunks:'initial'
            },
            "elementUI":{
                name:'chunk-elementUI',
                priority:20,
                test:/[/]node_modules[/]element-ui[/]/
            },
            "commoms":{
                name:'chunk-commons',
                test:resolve('src/components'),
                minChunks:2,
                priority:5,
                reuseExistingChunk:true
            }
        }
    }
  },
  plugins:[
      new CleanWebpackPlugin()
  ]
});
