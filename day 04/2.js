var a = function (x, y) {
    return x + y;
}

console.log(a(7, 2));
//求和
/*
i=0===>的时候
res=0+arguments[0]=0+1;
i=1===>的时候
res=1(上次计算的结果)+arguments[1]=1+2=3
i=2===>的时候
res=3(上次计算的结果)+arguments[2]=3+4=7
最后输出结果是7

*/
function fn() {
    var a = 0;
    for (var i = 0; i < arguments.length; i++) {      
        a = a + arguments[i];
    }
    return a;
}
console.log(fn(1, 2, 4));


// 把里面的"有效数字"相加
function fn(){
    var res=0;
    for(var i=0;i<arguments.length;i++){
        //把每一项转为数字
        var item=Number(arguments[i]);
        //判断当前项，如果是有效数字，我再累加，此处的判断条件还可以写成：
        
        //if(!isNaN)       
        if(isNaN(item)==false){
            res = res + item;
        }
    }
    return res;
}
console.log(fn(1, "2px", "4"));