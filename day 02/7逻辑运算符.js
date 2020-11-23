/*逻辑运算符
  表示且的：&& 也就是左右两边的表达式都必须成立
  表示或的：|| 只有这个符号左右两边只要有一个成立都可以进入执行体里面*/
var num=3;
// if(num>0){
//     alert("你对了")
// }

if(num>5){
    alert("棒棒哒")
}
else{
    alert("萌萌哒")
}


if(num<0){
    alert("负数")
}else if(num==0){
    alert("0")
}else if(num>0 && num<5){
    alert("休息一下吧")
}else{
    alert("哈哈")
}


//嵌套
if(num>0){

    if(num<5){
        alert("0-5")
    }
}


var flag=2;
if(flag==0 || flag==2){
    alert("heihei");
}

if(2==2){
    alert(1);
}

if([]){
    console.log(111);
}