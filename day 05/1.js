var fn=(...arg)=>{
    //...arg 声明一个变量 
    //在es6中 没有arguments
    console.log(arg);
}
fn(1,2)

var fn=x=>x+1;
console.log(fn(2));