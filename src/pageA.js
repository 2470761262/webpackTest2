import "./util/util1"
import "./util/util2"
import Vue from "vue";

new Vue({
  
})
setTimeout(()=>{
  import("./util/util4")
},2000)

console.log("PageA");