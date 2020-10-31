const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    pageA: "./src/pageA", // 引用utility1.js  utility2.js
    pageB: "./src/pageB", // 引用utility2.js  utility3.js
    // pageC: "./src/pageC", // 引用utility2.js  utility3.js
  },
  mode: "development",
  output: {
    path: path.resolve(process.cwd(), "./examples/dist"),
    publicPath: "",
    filename: "[name].js",
  },
  optimization: {
    runtimeChunk: {
      name: "manifest",
    },
    splitChunks: {
      cacheGroups: {
        // vendors: {
        //   test: /[\\/]node_modules[\\/]/,
        //   priority: -10,
        //   minChunks: 1,
        // },
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: true, // 最好设置把名字设置死  https://juejin.im/post/6844903614759043079
          priority: 10,
          enforce: true,
        },
        commons: {
          chunks: "initial",
          minChunks: 2,
          maxInitialRequests: 5, // The default limit is too small to showcase the effect
          minSize: 0, // This is example is too small to create commons chunks
        },
      },
    },
  },
};
