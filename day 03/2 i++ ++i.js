/*
 无论是++i 和 i++ 最终的i 值都是加了1
 var b=++i; 加号在前，先自身累加，然后赋值给b 就是3；
 var b=i++; 加号在后，先赋值，（b就是2），i再自身累加；
*/
var i=2;
var b=i++;
console.log(i);
console.log(b);

var i=2;
var b=++i;
console.log(i);
console.log(b);
