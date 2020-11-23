/*
1.charAt(索引)
  作用：获取指定索引位置的对应的那个字符
  区别：str[索引]和str.charAt(索引)基本一样，
       如果超出了字符串的长度，获取结果不同：
       str[索引]得到的是undefined;
       str.charAt(索引)得到的是"";
*/
var str="abc";
str[0] //"a"
str.charAt(0) //"a"
str.charAt(100) //""
str[5]//undefined
/*

2.charCodeAt(索引)
 作用：获取字符串中索引对应的ASCII码值（十进制的）
*/
str.charCodeAt(0) //97

/*
3.indexOf() lastIndexOf
*/
var str="avcdddddf"
str.indexOf("a") //0
str.lastIndexOf("d")//7

/*
4.slice(n,m)
   从索引n开始（包含）
   到索引m结束（不包含）
   索引可以用负数
   substring(n,m)
   跟slice参数用法相同
   slice和substring的区别？
   slice 索引可以用负数 subString索引不能是负数
*/
var str="avcdddddf"
str.slice(1,3)  //"vc" 
str.substring(1,3)//"vc"

var str="abcdefg";
str.slice(-3,-1)//"ef"
/*
5. substr(n,m)
   从索引n开始截取
   m:截取多少个 注意：不是索引
*/
str.substr(1,2)//"bc"

//截取字符串的三种方法 以及区别
//slice substring  substr 
//slice 可以用负数

/*
6. 大小写转换
str.toUpperCase(); 大写
str.toLowerCase(); 小写
*/
str.toUpperCase();//"ABCDEFG"
str.toLowerCase();//"abcdefg"

/*
7.repalce(n,m) :把字符串中的某些字符（n）替换成m
  n:要替换的字符（还可以是正则：符合某个规则的字符）
  m:最终替换成的字符
*/
var str="zhu123zhu123";
//var res=str.replace("zhu","哈");


var res=str.replace(/zhu/g,"哈"); //用正则 g代表所有的zhu 替换成 “哈”
console.log(res);//哈123zhu12

var str="aa0aa0bbb0";
var res=str.replace(/0/g,"b");
console.log(res);
/*
8.split 就是把字符串按照指定的分隔符 分成数组
*/
var str="10:20:30";
var res=str.split(":");// ["10", "20", "30"]


/*
  时间字符处理：把下面的字符串变成 2019年08月18日 12时32分18秒
*/
function zero(num){
    if(num<10){
        return "0"+num;
    }
    return num;
}
var str="2019-8-18 12:32:18";
var res=str.split(" ");
var res1=res[0].split("-"), res2=res[1].split(":");
var newres=res1.concat(res2);
var time=zero(newres[0])+"年"+zero(newres[1])+"月"+zero(newres[2])+"日"+" "+zero(newres[3])+"时"+zero(newres[4])+"分"+zero(newres[5])+"秒";
console.log(time);

var  str ="https://www.baidu.com?name=zhufeng&age=10&id=14";
/*
 name:zhufeng,
 age:10,
 id:10
*/
var  str ="https://www.baidu.com?name=zhufeng&age=10&id=14";
function getParms(str){
    var obj={};
    var strParms=str.split("?")[1];
    var strAry=strParms.split("&");//["name=zhufeng", "age=10", "id=14"]
    for(var i=0;i<strAry.length;i++){
        var item=strAry[i];//"name=zhufeng"
        var key=item.split("=");//["name","zhufeng"]
        obj[key[0]]=key[1];

    }
return obj;
}
console.log(getParms(str));
