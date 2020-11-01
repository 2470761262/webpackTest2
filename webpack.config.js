const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

process.env.NODE_ENV = 'development';
module.exports = {
  devtool: "eval-source-map",

  entry: {
    main: path.join(__dirname, "./src/index.js"),
  },

  mode: "development",

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              ident: "postcss",
              plugins: () => [require("postcss-preset-env")()],
            },
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "./sorry.js",
          },
          // {
          //   loader: "linkloader",
          // },
        ],
      },
    ],
  },
  resolveLoader: {
    // 去哪些项目下寻找Loader，有先后顺序之分
    modules: ["node_modules", "./linkloader/"],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
    new HtmlWebpackPlugin({
      template:"./index.html",
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
