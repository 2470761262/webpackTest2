module.exports = function (content) {

 // console.log(typeof content);
//
  //this.callback(null, content.replace(1, 7));
  //貌似还是要用 supervisor 来启动
  console.log("loader-xxx");
  return content.replace(550, 322)
};
