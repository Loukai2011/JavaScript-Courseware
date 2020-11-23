var num=0;
//1.打印
// console.log(num);

// var box=document.getElementById("box")
//2.详细输出
console.dir(box)


//3.弹窗的时候，会把数据转为字符
var obj={name:"LILi"};
alert(obj)

//4.提示框
// 如果点击确定，返回值就是true  如果点击的是取消 返回值就是false
var res=confirm("你准备好了吗？")
console.log(res);

//5.带输入框的提示框：返回值 如果点击的是确定 返回值就是你输入的内容
                           //如果点击取消 返回值就是null
var res2=prompt("你是男孩还是女孩？")
console.log(res2);