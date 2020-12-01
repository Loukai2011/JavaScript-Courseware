function Fn(name,age){
    this.name=name;
    this.age=age;
}
//往原型上拓展公有的属性和方法
Fn.prototype.sayFn=function(){
    //谁调用这个函数 函数里面的this就是谁
    alert('我的名字是'+this.name+'我'+this.age)
}
var f1=new Fn('卡卡','22')
var f2=new Fn('莉莉','20')
f1.sayFn();
f2.sayFn();

//往末尾追加项
Array.prototype.Mypush=function(){
    for(var i=0;i<arguments.length;i++){
        this[this.length]=arguments[i]
    }

return this.length
}
var ary=[1,2,3];
ary.Mypush(4)


Array.prototype.Mypush=function(){
    for(var i=0;i<arguments.length;i++){
        ary[ary.length]=arguments[i]
    }

return ary.length
}
var ary=[1,2,3];
ary.Mypush(4)

//--------------------------------------------------------------------------------

//链式调用
//想要实现一个需求：
//var ary=[5,8,2,1,10] ；想要让这个数组先排序，然后再倒序，然后再往里面添加一个10，然后再删除第一项；
//注意 实现链式写法：保证每次函数执行完毕之后的返回结果是当前类的实例
var ary=[5,8,2,1,10]
ary.sort(function(a,b){return a-b}).reverse().push(10);
ary.shift()
console.log(ary);

//---------------------------------------------

//重定向：
//手动更改原型的指向，没有constructor,需要手动添加
fn.prototype={
    constructor:fn,
    getY:function(){
        return "getY";
    }
}
var f2=new fn();
console.log(fn.prototype.constructor)

//-------------------------------------------------

// 手动封装一个检测公有属性

var obj={name:'li'};
obj.prototype=function getx(){
   getx=100;
}
//第一种
Object.prototype.hasOwnPub=function(attr){
    if(attr in this){
       if(this.hasOwnProperty(attr)==false){
           return ture
       }
    }
    return false;

}
obj.hasOwnPub("name")

//高逼格
Object.prototype.hasPublicPro=function(attr){
    //this 
    return attr in this&&!this.hasOwnProperty(attr)?true:false;

}

//------------------------------

// 函数的三中形式
function Fn(x,y){
    var total=x+y;
    this.a=x;
}
Fn(1,2);//普通函数
var f1=new Fn(3,4); //类

var obj={};
obj.name='li';

Fn.age=100;//对象

var f2=new Fn(2,3)
console.log(f2.age)

//------------------------------

//函数的原型指向发生改变的问题
function Fn() {
    this.x = 100;
}
Fn.prototype.getX = function () {
    //this f1
    // f1.x
    return this.x;
}
var f1 = new Fn();
// 原型的指针发生改变
Fn.prototype = {
    getY: function () {
        return this.x
    }
};
var f2 = new Fn();
console.log(f1.getX());//100
console.log(f2.getX());//报错
console.log(f1.constructor);//Fn
console.log(f2.constructor);//Object 

//-----------------

//阿里面试题：
/* 
变量提升：
function Foo
function getName ：console5======》console4===》1
*/
function Foo(){
    //getName 不是私有的，把全局的getName值进行了更改
    getName=function(){
      console.log(1);
    };
    // window
    return this;
}
//Foo 对象 添加一个属性 getName---console2
Foo.getName=function(){
    console.log(2);
}
//类 往原型上添加公有的方法getName----console3
Foo.prototype.getName=function(){
    console.log(3);
}
// 把全局的getName值更改了
var getName=function(){
    console.log(4);
}
function getName(){
    console.log(5);
}
Foo.getName(); // 2 对象，
getName(); // 4 普通函数的执行
Foo().getName();// window.getName(); 1
getName();//1
new Foo.getName(); // 2
new Foo().getName();//3 先运算new Foo() // new Foo() 当成构造函数，函数里面的this就是这个实例，
                    //（f1）f1.getName（）;先找自己私有的getName，无，去原型上找，找到 
new new Foo().getName();// 先运算里层的 new Foo()（看成A）,==>A.getName ==>new b ();====》3

