//for in 循环
//遍历对象中的属性名和属性值
var obj={name:"li",age:"18",job:"student"}
for(var key in obj){
    var value=obj[key];
    console.log("key:"+key+"    "+"value:"+value);
}
//while 循环
//只要条件成立就会执行循环体里面的语句
var num=2;
while(num>1){
 console.log(num);
 break;
}

//do while
//不管语句是否成立，先执行一次循环体里面的语句，然后再判断
var num=4;
do{
    console.log(num);
   // break;
}while(num>3)

/*函数
  代表某种功能
  函数是一个引用数据类型，在存储的时候，开辟一个堆内存，把里面的代码当做字符串
  进行存储（空间地址），然后会把空间地址给函数名
  形参：形式上的参数
  实参：真实传递的参数
  不确定传递参数的个数：arguments 类数组，有索引，有长度
                      arguments.length传递的真实参数的个数
                      arguments[0] 具体的某个参数
                      arguments.callee;当前函数本身
  函数的返回值：在函数里面return多少，函数执行的结果就是多少，如果不写return 返回值就是undefined
  函数在执行的时候：会形成一个私有作用域，保护里面的私有变量不受外界的干扰，这种机制理解为闭包
  
  ## 接受函数的方式
     arguments
     形参
  
*/         


function fn(x,y,z){
    console.log(1);
}
//fn.length 得到的是形参的个数
//fn.name  函数的名字
fn();//函数的执行
fn.length;
fn.name



function fn(){
    console.log(arguments)
    // arguments 类数组
    console.log(arguments.length);
    //传递的参数的个数
}
fn(1,2,3,4)



function fn(x,y){
  return x+y;
}
//var res=fn(1,2);
console.log(fn(1,2));

//函数：
//实名函数
//匿名函数:
//   函数表达式
//   自执行函数：一上来就执行
(function(){
    console.log(1)
}) ();

+function(){
    console.log(1)
}();

-function(){
    console.log(1)
}();

~function(){
    console.log(1)
}();

!function(){
    console.log(1)
}();


/*
  es6的箭头函数
*/
//普遍写法
var res=function(x,y){
    return x+y;
}
//可以简写为 var res=(x,y)=>x+y
var res=(x,y)=>x+y
console.log(res(1,2));


//es6可以省去function
var res=(x,y)=>{
    return x+y;
}
console.log(res(1,2));

//如果说形参只有一个，小括号也可以省去
var res=x=>{
    return x+1;
}
console.log(res(2));

//如果执行体里面只return了一句代码 函数体的｛｝也可以省去
var res=x=>x+1;
console.log(res(2));

