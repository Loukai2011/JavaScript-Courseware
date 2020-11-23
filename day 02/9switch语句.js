var num=5;
if(num==5){
    num++;
    console.log(num);
}
else if(num==6){
    num--;
}
else{
    num==0;
}
/*
 == 代表的是比较，两个的话，如果数据类型不同，会先转换为相同的数据类型，再进行比较
 === 绝对比较，数据类型和值都必须相等
 switch case 就是绝对比较 （===）
*/
var num=5;
switch(num){
 case 5:
     num++;
     console.log(num);
     break;

case 6:
    num--;
    break;

default:
    num=0;
    console.log(num);
}

