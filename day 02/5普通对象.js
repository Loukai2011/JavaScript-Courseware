/* 
  对象
  属性名：一般是字符串和数字
  属性值： 可以是任意的数据类型
*/
var obj = {
    name: "li",
    age: 13,
    100:"he"
}
//获取属性名对应的属性值 方法
//1、对象.属性名
//2. 对象["属性名"]
// 注意：如果属性名是数字，不能用第一种（会报语法错误） 要用第二种
//在获取的时候，如果对象中没有这个属性名  得到的是就是undefined

console.log(obj.name);
console.log(obj["name"]);

console.log(obh[100]);
console.log(obj.100);//会有语法错误 数字属性名 对应的属性值不能这样获取

//思考题

var obj={
    name:"Lili",
    age:12,

}
var name="zhufeng";
console.log(obj.name); //"Lili"
console.log(obj["name"]); //"Lili"
console.log(obj[name]);// obj["zhufeng"]; undefined
//在获取的时候，如果对象中没有这个属性名  得到的是就是undefined

var obj={name:"Li", age:12 }
obj.name=null;
//如果里面没有，我直接赋值就是添加，如果原来有，又赋值就是更改
obj.age=100; //更改

obj.job="攻城狮";//添加

// 删除 属性名还在 只是值变成了null
obj.name=null;

//彻底的删除
delete obj.name;
console.log(obj);

