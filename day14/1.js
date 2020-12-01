//内置类的原型不允许重定向，但是可以往他的原型上添加或者覆盖原有的方法
Array.prototype=100;
console.log(Array.prototype);//还是原来的

Object.prototype.hasPublic=function(attr){
    return attr in this && this.hasOwnProperty(attr)==false ? true:false;
}
[1,2,3].hasPublic("hasOwnProperty")

Array.prototype.mypush=function(){
    for(var i=0;i<arguments.length;i++){
        this[this.length]=arguments[i];

    }
    return this.length
}
var a=[1,2,3]
a.mypush(4);
console.log(a);

//----------------------------------------------------------------

/*
 原型继承：有A类、B类 
           想让B所有的实例继承A类私有的和公有的的方法
 原型继承：让B类的原型指向A类的实例
*/
function A(){
    this.a="a";
}
A.prototype.getA=function(){
    console.log(this.a)
}
function B(){
    this.b="b";
}
B.prototype=new A();
var b=new B();
console.log(b);

//--------------------------
//中间继承类：某些实例并不属于某类，但是想用它其原型上的方法，我们可以手动的去更改实例的__proyo__,
//让他指向这个类的原型

function fn(){
    arguments.__proto__=Array.prototype;
    var res=arguments.sort(function(a,b){return a-b});
   console.log(res)
}
fn(2,3,4,8,1)


//--------------
//call 继承：B类和A类 ，想让B类的实例拥有A类的私有属性，我们可以让A当成普通函数执行，
    //把里面的this指向进行更改成B的实例（往B的实例上添加属性）
function A(){
    this.a="a";
    this.x=100
}

function B(){
    A.call(this);
    this.b="b";
    this.y=200
}
var b=new B();
console.log(b)

//--------------------------------------
//寄生组合继承
function A(){
    this.a="a";
    this.x=100;
}
A.prototype.getA=function(){
    console.log("A")
}

function B(){
    A.call(this);
    this.b=200;
    this.y=300;
}
B.prototype=Object.create(A.prototype);//创建一个对象，并且让空对象的__proto__指向参数
var b=new B();
console.log(b);

//---------------------

//call 方法
 var name="window";
 function fn(x,y){
     console.log(this.name);
     return x+y;
 }
 var obj={name:'li',fn:fn};
 //第一个参数：更改的this指向 从第二个参数开始就是函数执行需要的正常参数
 //call bind apply 这三个方法是存在Function的原型上的 只要是函数都可以去用（Object基类也可以）
 var res=fn.call(obj,1,2)
/*
执行过程：
1、通过原型链找到Function.prototype上的call方法
2、找到之后，让fn这个方法执行
3、执行的时候，内部需要把fn函数里面的this进行改变，改成第一个参数
*/

/*
在非严格模式下：不传或者null undefined ==》this 都是window
在严格模式下：不传或者 undefined this==》undefined  如果传递null this ==》null
*/
//-------------------

//apply和call的方法相同，就是第二个参数是以数组（类数组）的形式进行传参
var obj={
    name:"li",
}
function fn(x,y){
    console.log(this,x,y)
}
fn.apply(obj,[1,2])

//-------------------
// bind 预先处理this的指向，并不能让函数执行，想要函数执行，咱们需要再调用一下返回值
var obj={name:1};
function fn(x,y){
    console.log(this,x,y);
}
var res=fn.bind(obj,1,2);
res();

//-------------------
//自己手动封装一个call方法
Function.prototype.MyCall=function(obj,...arg){
var res=null;
obj.$fn=this;
res=obj.$fn(...arg);
delete obj.$fn;
return res;
}
var obj={name:'li'}
function fn(x,y){
    console.log(this);
    return x+y;
}
var res=fn.MyCall(obj,12,12);
console.log(res);










   