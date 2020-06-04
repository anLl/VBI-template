const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Happypack = require("happypack");
const os = require("os");
const happypackThreadPool = Happypack.ThreadPool({ size: os.cpus().length });
const ProgressBarPlugin = require("progress-bar-webpack-plugin");
const chalk = require("chalk");

function resolve(dir) {
  return path.resolve(__dirname, "..", dir);
}

module.exports = {
  entry: {
    app: resolve("src/main.js"),
  },
  output: {
    filename: "js/[name].bundle.[hash:6].js",
    path: resolve("dist"),
  },
  module: {
    rules: [
      { test: /\.vue$/, use: "vue-loader" },
      {
        test: /\.(css|less)/,
        use: [
          process.env.NODE_ENV == "production"
            ? {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: "../",
                },
              }
            : "vue-style-loader",
          "css-loader",
          "less-loader",
        ],
      },
      {
        test: /\.js$/,
        use: "happypack/loader?id=jsHappy",
        include: [resolve("src")],
      },
      {
        test: /\.(jpe?g|png|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: "file-loader",
            options: {
              limit: 10000,
              esModule: false,
              name: "image/[name].[contenthash:6].[ext]",
            },
          },
        ],
        exclude: [resolve("src/icons")],
      },
      {
        test: /\.svg$/,
        use: {
          loader: "svg-sprite-loader",
          options: { symbolId: "icon-[name]" },
        },
        include: [resolve("src/icons")],
      },
      {
        test: /\.(woff2?|woff|truetype|eot|embedded-opentype|ttf|TTF|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "fonts/[name].[contenthash:6].[ext]",
          publicPath: "../",
        },
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: resolve("public/index.html"),
      filename: "index.html",
      favicon: resolve("public/favicon.ico"),
      title: "webpack配置Demo",
    }),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:6].css",
    }),
    new Happypack({
      id: "jsHappy",
      loaders: [
        {
          loader: "babel-loader?cacheDirectory=true",
        },
      ],
      threadPool: happypackThreadPool,
      verbose: true,
    }),
    new ProgressBarPlugin({
      format:
        "  build [:bar] " +
        chalk.green.bold(":percent") +
        " (:elapsed seconds)",
      clear: false,
    }),
  ],
  resolve: {
    extensions: [".vue", ".less", ".js"],
    alias: {
      "@": resolve("src"),
      vue$: "vue/dist/vue.esm.js",
    },
  },
};
