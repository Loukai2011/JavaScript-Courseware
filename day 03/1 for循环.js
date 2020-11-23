

/*
 依次打印出里面的每一项
 重复去做一件事情的时候，我们就可以用for循环
 1、声明定义初始值
 2、条件符合，进入执行体
 3、进行累计操作
*/
var ary=[1,2,3];
for (var i=0; i<ary.length; i++){
    console.log(ary[i]);
}
//反着打印所有项
var ary=[4,5,6,7];
for(var i=ary.length-1; i>=0;i--){
    console.log(ary[i]); 
}
//打印所有的奇数项 ，其实就是打印 索引 为偶数的
var ary=[5,6,7,8,9];
for(var i=0; i<ary.length;i++ ){
    if(i%2==0){
        //取余数
    console.log(ary[i]);
    }
}
//打印所有的偶数项 ，其实就是打印 索引 为奇数的
var ary=[5,6,7,8,9];
for(var i=0; i<ary.length;i++ ){
    if(i%2==1){
    console.log(ary[i]);
    }
}