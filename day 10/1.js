/* 变量提升的特殊性：
   判断语句：不论条件是否成立，都会进行变量提升
   var 还是之前理解：只声明不定义
   function 在老版本浏览器中：声明+定义
            在新版本浏览器中：只声明不定义

*/


/* 
在变量提升阶段：声明变量 a
代码自上而下执行：
*/

// console.log(a); // undefined
// if(1==2){
//   var a=12;
// }
// console.log(a);//undfined


console.log(num);// undefined
console.log(fn);// undefined
     if([]){
         // 只要进到当前if条件中，会立即对fn进行赋值；
         fn()
         var num=100;
         function fn(){console.log("a")}
         
     }
console.log(fn);// undefined

