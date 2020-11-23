console.log(1);

var dom=document.getElementById("box"); 
console.log(dom);


 //NUll 和 undefined 的区别
//声明变量的时候 我不清楚这个数据类型是什么，就可以先写一个null
//null是意料之中的没有 undefined 是意料之外的没有
//null 指的是null对象指针

//只声明 没定义 undefined
var name;
console.log(name);

//在获取对象的属性值 如果对象里没有对应的属性 那这个值就是undefined
var obj={name:"LilI"}
console.log(obj.name);
console.log(obj.age);

//函数里面设置了形参，在调用的时候，没有传实参，在函数中打印形参 就是undefined
function fn(x,y){
  console.log(x,y);
}
fn()

//函数没有return返回值 ，函数的返回结果就是 undefined
function fn(x,y){
   var total=x+y;
}
var res=fn(1,2)
console.log(res);