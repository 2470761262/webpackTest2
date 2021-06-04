//import gogo from "../gogo";
//import './css/css.css';
// import indextest from '../sorry.js!./indextest';//双感叹号就不会执行其他的loader了

import indextest from './indextest';
import cssgogo from "!!../cssloolo!./css/css.css";


console.log(cssgogo,"css class名字转js数组");

if (module.hot) {
    module.hot.accept();
}
// console.log(indextest);
// console.log(5501);
// console.log("挺好哦123");

//gogo.run();