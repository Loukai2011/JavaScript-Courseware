//定时器是异步的，先走同步

var time1=setTimeout(function(){
    console.log("setTimeout");
},1000);
clearTimeout(time1);
time1=null;

var num=0;
var time2=setInterval(function()  {
num++;
if(num>10){
    clearInterval(time2);
    time2=null;
}
console.log(num);
    
}, 1000);