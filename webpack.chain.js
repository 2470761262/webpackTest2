const Config = require('webpack-chain');
const fs = require('fs');

const config = new Config();


config.module
  .rule('sorry')
  .test(/\.js$/)
  .pre()
  .include
  .add('src')
  .end()
// // Even create named uses (loaders)
  .use('eslint')
  .loader('eslint-loader')
  .options({
    rules: {
      semi: 'off'
    }
  });
config.module.rule('sorry').use('jsx').loader('jsx-loader');
config.module.rule('sorryx').use('jsx').loader('jsx-loader');

//console.log(config.module.rules.delete("sorry"));
//config.module.delete("sorry")
const writerStream = fs.createWriteStream('chain.js');
writerStream.write(`module.exports = ${config.toString()};\n`, 'UTF8');
writerStream.end();

 // config.module.rules.store.delete("eslint");

//  console.log(
//     config.module.rule("eslint").uses.delete("eslint-loader"),
//     config.module.rule("eslint").delete("test")
//   );