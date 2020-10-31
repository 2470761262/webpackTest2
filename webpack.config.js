const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  devtool: "eval-source-map",

  entry: {
    main: path.join(__dirname, "./src/index.js"),
  },

  mode: "development",

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "./sorry.js",
          },
          {
            loader: "linkloader",
          },
        ],
      },
    ],
  },
  resolveLoader: {
    // 去哪些项目下寻找Loader，有先后顺序之分
    modules: ["node_modules", "./linkloader/"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html", // 指定生成的HTML文件名
    }),
  ],
  // 输出
  output: {
    path: path.resolve(process.cwd(), "./examples/dist"),
    publicPath: "",
    filename: "[name].js",
  },
  devServer: {
    //  contentBase: path.resolve(process.cwd(), './examples/dist"'),

    publicPath: "/",

    hot: true,

    overlay: { errors: true },

    quiet: true,
  },
};
