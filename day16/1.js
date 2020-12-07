
/*求数组中的最大一项*/

//用sort方法 和pop
var ary=[20,100,50,300];
var res=ary.sort(function(a,b){return b-a})[0];
console.log(res);

var ary=[20,100,50,300];
var res=ary.sort(function(a,b){return a-b}).pop();
console.log(res);

//用展开运算符 ...
var ary=[20,100,50,300];
Math.max(...ary);
Math.max.apply(null,ary)

//for循环 比大小 赋值
var max=ary[0];
var ary=[20,100,50,300];
for(var i=0;i<ary.length;i++){
max=ary[i]>max?ary[i]:max
}
console.log(max);

//for循环 取最大
var ary=[20,100,50,300];
for(var i=0;i<ary.length-1;i++){
    if(ary[i]>ary[i+1]){
        var res=ary[i];
        ary[i]=ary[i+1];
        ary[i+1]=res;

    }
}
console.log(ary[ary.length-1]);


//把类数组 转换成数组

//1）toArray方法
function toArray(likeArray){
for(var i=0;i<likeArray.length;i++){
    var ary=[];
    ary.push(likeArray[i]);
}
return ary;

function fn(){
    var res=toArray(arguments);
    console.log(res);
}
}
fn(12,12,0)

//2） call 方法
function toArray(likeArray){
    return [].slice.call(likeArray);
 }
function fn(){
    console.log(toArray(arguments));
}
fn(1,2,3);

//3）Array.from 把类数组 装换成数组
function fn(){
    var res=  Array.from(arguments);
    console.log(res);
     
  }
     
  fn(1,2,3);

// 使用 剩余运算符
function fn(){
    var res=[...arguments]
    console.log(res);
     
  }   
fn(1,2,3);

// 求平均数 
function average(){
    var a=Array.from(arguments);
    a.sort(function(a,b){return a-b});
    a.pop();
    a.shift();
    var c=0;
    for(var i=0;i<a.length;i++){
        c=c+a[i];
    }
    var res=c/a.length;
    return res;
    /*
     用join 和 eval 方法
     return eval(a.join("+"))/a.length
    */
}
var res=average(1,2,8,10)

//2 方法
function average(){
    var max=Math.max(...arguments);
    var min=Math.min(...arguments);
    return (eval([...arguments.join("+")])-min-max)/(arguments.length-2);
}

//给对象排序
var ary=[{age:20},{age:2},{age:210}];
ary.sort(function(a,b){
  return a.age-b.age
});


//JSON
var obj={name:"小王",age:18}
var res=JSON.stringify(obj); //转成json格式的字符串 "{"name":"小王","age":18}"
JSON.parse(res);//转换成json格式的对象 {name: "小王", age: 18}

//浅克隆 
var obj={name:"li",a:{c:100}};
var obj2={};
for(var key in obj){
    obj2[key]=obj[key];
}
console.log(obj2);
obj2.a.c=300;
console.log(obj,obj2);

//深克隆 不互相影响
var obj={name:"li",a:{c:100}};
var res=JSON.parse(JSON.stringify(obj));

res.a.c=300;
console.log(obj,res);

// 在es6中没有变量提升
let a=9;
let a=0; //Identifier 'a' has already been declared
// 同一个作用域下，不允许重复声明一个变量
//const 定义一个常量，必须在声明的时候就给一个初始值
const a;//Missing initializer in const declaration
//暂时性死区
  

var [a,b,c]=[1,2,3];
console.log(a,b,c);

//用逗号进行占位
var [a,,,,,,,c]=[1,2,3,4,5,6,7,8];
console.log(a,c);

//如果右边没有对应的值哪项，获取的时候就是undefined
var [a,b,c]=[1,2];
console.log(c);//undefined

//结构左右一一对应
var [,[,a],]=[1,[2,3],4]
console.log(a);

//默认值：如果那个值绝对等于undefined 那就走默认值
var [a,b,c=10]=[1,2,null]
console.log(c);

//对象的解构赋值跟属性名有关（跟顺序无关）；
let {age,name}={name:"li",age:10};
console.log(name,age);

//如果没有对应的项 值就是undefined
let {age,name}={name:"li"}
console.log(age,name);

//用等号可以设置默认值，只要是绝对等于undefined 就走默认值
let {age=100,name}={name:"li",age=200};
console.log(name,age);

//可以起别名
let{age:a,name}={name:"li",age:10};
console.log(a);



function fn(){
    console.log(1);
}
let obj={
    fn
}
obj.fn();

//
function fn([x,y]){
    console.log(x,y);
}
var ary=[1,2];
fn(ary);

//设置参数默认值
function fn(x=20,y=10){
    console.log(x,y);
}
fn();

//起别名
function fn({age:a}){
    console.log(a);
}
fn({name:"li",age:10});

//运算符
var ary1=[1,2,3];
var ary2=[4,5,6];
var ary3=[...ary1,...ary2];
console.log(ary3);

var obj={name:"li"};
var obj2={age:10,"name":"da"}
var obj3=Object.assign(obj,obj2);//可以合并对象
console.log(obj3);

var obj4={...obj,...obj2}
console.log(obj4);

//剩余运算符：把剩余的项装到一个数组中
function fn(x,y,...arg){
    console.log(arg);
}
fn(1,2,3,4,5);

//剩余运算符：把剩余的项装到一个数组中
let [a,...arg]=[1,2,3,4,5,6];
console.log(arg);



// 箭头函数：
//     1）没有this 如果用了this，就会按照作用域链向上查找
//     2）箭头函数中没有arguments
//     3）箭头函数不能当成类去使用
var fn=x=>x;

var fn=function(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
var fn=a=>b=>c=>a+b+c;
var res=fn(1)(2)(3);
console.log(res);

// 
function A(name ){
    this.x=100;
    this.y=200;
}
A.prototype.getA=function(){
    console.log(1);
}
A.a=600;
//转成es6
class A{ //既不是对象也不是作用域
    constructor(name){
        this.x=100;
        this.y=200;
    }
    //原型上的方法
    getA(){
        console.log(1);
    }
    f=300;//给实例添加私有的属性
    static a=600;//把A这个类当成对象，给他添加静态属性
}
var a=new A();
//A(); 在es6中不能直接使用 会报错

class B extends A{ //B继承A的公有属性和私有属性
    constructor(){
        super();//相当于call继承
        this.a='a';
        this.b='b';
    }
    getB(){
        console.log('getb');
    }
    fn(){
        super.getA();
        //通过super 可以拿到A类原型上的方法
    }
}
var b=new B();
b.fn();




var x=3; //13 14 186
var obj={
    x:5//71
};
obj.fn=(function(){
    this.x=this.x*++x; // 3*4
    return function(y){
        this.x=this.x*(++x)+y;//5*13+6 13*14+4
        console.log(x);
    }
})();
var fn=obj.fn;
obj.fn(6);//13
fn(4); 186
console.log(obj.x,x); //71 186