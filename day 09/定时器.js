/*
 过多长时间之后，做一些事情（一次）
*/

setTimeout(function(){
    console.log("hehe")
},2000);

//每隔多长时间就做一次
setInterval(function(){
    console.log("1");
}, 1000);

/*定时器他的返回值代表的就是 ，这个页面中第几个定时器*/