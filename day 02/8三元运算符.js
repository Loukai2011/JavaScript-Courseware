//三元运算符
//条件？成立的执行语句：另外一个执行语句
//注意：如果执行体里面有多条语句，用小括号包起来 ，并且语句与语句之间用逗号隔开
var num=5;
if(num>5){
    num++;
    alert(num)
}
else{
    num--
}
//换成三元运算符
num>5?num++:num--;
//多条语句
var num=5;
num>5?(num++,console.log(num)):(num--,console.log(num));
num>5?(num++,console.log(num)):(num--,console.log(num));

num>0?(num<10?num++:num--):(num==0?(num++,num=num/10):void 0);


//如果你只有一个if判断即可，我们改写三元的时候，我们需要用一下占位符：
if(num>5){
    num+=2;
}
var num=6;
num>5?(num+=2 ,console.log(num)):void 0;
num>5?num+=2:null;
num>5?num+=2:undefined;
//占位符  void 0 , null , undefined


