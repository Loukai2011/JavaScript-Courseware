var ary = [1, 2, 3, 2, 4];
/* 
需求：去重
思路：
  第一次：拿1
           ====》2,3,2,4
  第二次：拿2         
           ====》3,2,4  删除2  ===》3,4
  第三次：拿3         
           ====》4  
  第四次，还用拿吗？不用再拿了
  
  原理：依次拿出数组中的每一项，和他后面的所有剩余项进行比较，
  如果有相同的就删除
*/
function unique(ary) {
    for (var i = 0; i < ary.length - 1; i++) {
        for (var j = i + 1; j < ary.length; j++) {
            if (ary[i] == ary[j]) {
                ary.splice(j, 1);
                j--;
            }
        }
    }
    return ary;
}

var ary = [1, 1, 1, 3, 1, 2, 3, 2, 4];
var ary2 = [2, 2, 3, 4, 2];
var res = unique(ary);
var res2 = unique(ary2)
console.log(res2);
console.log(res);


//第二种方法
var obj = { 1: 1, 2: 2, 3: 3, 4: 4 }
/*原理： 先创建一个空对象，去遍历数组的每一项，
        把数组的每项当成属性名和属性值，给此对象参加
        在添加的过程中，如果此对象已经有此项，说明重复，
        在数组中删除掉此项*/
function unique(ary) {
    //先创建一个空对象
    var obj = {};
    for (var i = 0; i < ary.length; i++) {
        var item = ary[i];

        //说明此项已经有了
        if (obj[item] == item) {
            ary.splice(i, 1);
            i--;
           continue;
        }
        obj[item] = item;
    }
    return ary;
}

var ary = [1,1,1, 2, 2, 4];
var res = unique(ary);
console.log(res);

//第三种方法
function unique(ary) {
    var newAry = [];
    for (var i = 0; i < ary.length; i++) {
        //newAry.indexOf(ary[i]) > -1 说明新数组里面有
        if (newAry.indexOf(ary[i]) == -1){
            newAry.push(ary[i]);
        }
    }
    return newAry;
}
var ary = [1, 3, 1, 2, 3, 2, 4];
var res = unique(ary);
console.log(res);