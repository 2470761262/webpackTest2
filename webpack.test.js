const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: {
    pageA: "./src/pageA", // 引用utility1.js  utility2.js
    pageB: "./src/pageB", // 引用utility2.js  utility3.js
    pageC: "./src/pageC", // 引用utility2.js  utility3.js
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
        // //   minChunks: 1,
        // },
        // vendor: {
        //     test: /node_modules/,
        //     chunks: "initial",
        //     name: "vendor",
        //     priority: 10,
        //     enforce: true
        // }
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          //如果名字写死,将会把所有的所以引用的第三方都给抽离打包到一起 
          //比如name这个属性就叫xx 那么打包出来就叫xx.js了
          //但是如果是true或者没有设置
          //比如PageA和PageB有共的第三方,的则会打包成vendor~pageA~pageB
          //pageC只有自己用的话,就打包成vendor~pageC
          //如果没有设置vender 在没有设置
          //那么webpack会自己根据文件引用的次数打包
          //1一次以上的还是会被抽离出去
          //只有一次的会被打包到自己的文件里
          name: true, //  最好不要把名字设置死  https://juejin.im/post/6844903614759043079
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
