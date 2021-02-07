const webpack = require('webpack');
const devMiddleware = require('webpack-dev-middleware');
const hotMiddleware = require("webpack-hot-middleware");
const config = require("./webpack.node");
const compiler = webpack(config, () => {
    console.log("gogo");
});
// {
//     "userName": "15207140240",//孙总号码
//     "passWord": "C4CA4238A0B923820DCC509A6F75849B"
// },
const express = require('express');
const app = express();
app.use(express.static(__dirname))
compiler.watch({
    // watchOptions
    aggregateTimeout: 300,
}, (err, stats) => {
    console.log();
    // 每次因文件发生变化而重新执行完构建之后
});

//-------------------------

// app.use(
//   devMiddleware(compiler, {
//      publicPath: config.output.publicPath
//   })
// );


// app.use(
//   hotMiddleware(compiler,{
//    hot: true,
//   })
// );

app.listen(3001, () => console.log('Example app listening on port 3000!'));