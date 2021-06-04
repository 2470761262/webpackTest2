module.exports = function (content,a,b) {

 // console.log(typeof content);
//
  //this.callback(null, content.replace(1, 7));
  //貌似还是要用 supervisor 来启动
//   console.log("loader-xxx5555",a,b);
//   return   "const b = 64646;" +content;//content.replace(550, 322)
// console.log("loader-xxx23232",this.data,b);
    return content;
};


module.exports.pitch = function (a,b,data) {
    //  console.log("sssssssssssssssssssssss");
    // console.log(a,b,data,2);
    // data.soso = 535;
};

// export default function(cb) {
//     return cb(import(/* webpackChunkName: "my-lazy-"*/ "sssx" ))
// };
