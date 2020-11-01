const webpack = require('webpack');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require("webpack-hot-middleware");
const config = require("./webpack.node");
const compiler = webpack(config);
const express = require('express');
const app = express();

//app.use(express.static(__dirname))

app.use(
  devMiddleware(compiler, {
     publicPath: config.output.publicPath
  })
);

app.use(
  hotMiddleware(compiler,{
  //  hot: true,
  })
);

app.listen(3000, () => console.log('Example app listening on port 3000!'));