function fn(){
    var res=0;
    for(var i=0;i<arguments.length;i++){
        var item=Number(arguments[i]);
        if(isNaN(item)==false){
            res=res+item;
        }
    }
    return res;
}
console.log(fn(1,2,"aaa","8"));