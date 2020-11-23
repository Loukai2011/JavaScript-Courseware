
var  str ="https://www.baidu.com?name=zhufeng&age=10&id=14";
function getObject(){
    var obj={};
    var one=str.split("?")[1];
    var two=one.split("&");
    for(var i=0;i<two.length;i++){
        var key=two[i].split("=");
        obj[key[0]]=key[1];

    }
    return obj;
}
console.log(getObject(str))
