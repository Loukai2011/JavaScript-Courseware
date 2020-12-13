// 封装Map 方法
Array.prototype.MyMap = function (MyMap) {

}
let ary = [1, 2, 3, 4];
ary.MyMap(function () {

});


Array.prototype.MyForEach = function () {

}

let ary = [1, 2, 3, 4];
ary.MyForEach()


Array.prototype.myForEach = function (fn) {
    for (var i = 0; i < this.length; i++) {
        fn(this[i], i);
    }

}
var ary = [1, 2, 3, 4, 5];
var res = ary.myForEach(function (item, index) {
    console.log(item + index);
})
Array.prototype.myMap = function (fn) {
    let newAry = [];
    for (var i = 0; i < this.length; i++) {
        newAry[i] = fn(this[i], i);
    }
    return newAry;
}
var ress = ary.myMap((item, index) => {
    return item + "index";
})
console.log(ress);


// function map(callBack){
//     // console.log(callBack);
//     callBack(100,0)
// }
// map((item,index)=>{
//     console.log(item,index);
// })

Array.prototype.myMap = function (callBack) {
    let ary = [];
    for (let i = 0; i < this.length; i++) {
        let res = callBack(this[i], i);
        ary.push(res)

    }
    return ary
}

let res = [100, 200, 300, 400].myMap((item, index) => {
    return item;
});

// [1,1,1,1]
let str = 's123sd456fgh789kl';
let reg = /\d{3}/g;
// console.dir(reg.lastIndex); // 0
console.log(reg.exec(str)); // '123'
//console.dir(reg.lastIndex); // 4
console.log(reg.exec(str)); // '456'
//console.dir(reg.lastIndex); // 9
console.log(reg.exec(str)); // '789'
//console.dir(reg.lastIndex); // 16
console.log(reg.exec(str))
// 封装一个方法，可以把当前字符串里所有负责规则的内容全部捕获到，并且数组的形式返回
let str = 's123sd456fgh789kl';
let reg = /\d{3}/g;
RegExp.prototype.myExec = function (str) {
    if (!this.global) {
        return this.exec(str);
    }
    let ary = [];
    let res = this.exec(str);
    while (res) {
        ary.push(res[0]);
        res = this.exec(str);
    }
    return ary.length ? ary : null;

}
let res = reg.myExec(str);
console.log(res);

//match 是一个字符串方法，用法和刚才咱们封装的方法是一致的
// 如果正则不加g,那方法返回的值和exec一样
// 如果正则匹配不到 那返回null
// 正常情况下返回的的是一个数组，数组里存放的是捕获到的每一项内容

/*
let time = "2019-08-13";
    //=>需求：将time变为"2019年08月13日"
    let reg = /(\d{4})-(\d{2})-(\d{2})/;
    console.log(reg.exec(time));
*/
let time = "2019-08-13";
let reg = /(\d{4})-(\d{1-2})-(\d{1-2})/;
time2=time.replace(reg,function(){
    console.log(arguments);
    let a=arguments[1]+'年'+arguments[2]+'月'+arguments[3]+'日';
   return a ;
})


   // 单词首字母大写
   let str = "good good study，day day up！";
   let reg = /\b([a-zA-Z])([a-zA-Z]*)\b/g;

   let res = str.replace(reg,(...ary)=>{
       console.log(ary);
     let [word,first,next] = ary;
     first = first.toUpperCase(); // G
     // return first + next
     // return first + word.slice(1);
   });
   console.log(res);
   //"undefined undefined undefined, undefined undefined undefined"