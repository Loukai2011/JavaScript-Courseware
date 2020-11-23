/*
 检测数据类型的几种方式
 1.typeof
   返回值一定是字符串
   +"string"
   +"number"
   +"boolean"
   +"undefined"
   +"object"
   +"function"
   特殊记忆：typeof null==>"object"
2. instanceof
3. constructor
4.Object.prototype.toString.call()
*/
//面试题
typeof [];
typeof typeof [];
typeof 12
"number"
typeof "12"
"string"
typeof true
"boolean"
typeof false
"boolean"
typeof NaN
"number"
typeof null
"object"
typeof ""
"string"
typeof undefined
"undefined"
typeof [1,2,2]
"object"
typeof [/\d/]
"object"
function fn(){}
undefined
typeof fn
"function"
