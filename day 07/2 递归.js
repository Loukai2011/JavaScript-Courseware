//打印1到10
function fn(num) {
    if (num > 10) {
        return;
    }
    console.log(num);
    fn(num + 1);
}
fn(1);
//用for循环 计算1到100的和
var n = 0;
for (var i = 1; i <= 100; i++) {
    n = i + n;
}
console.log(n)

//用递归求1-100之和
function fn(num) {
    if (num > 100) {
        return 0;
    }

    return num + fn(num + 1);
    return 1 + fn(1 + 1)
    return 1 + fn(2)
    return 1 + (2 + fn(2 + 1))
    return 1 + (2 + fn(3))
    return 1 + (2 + (3 + fn(3 + 1)))
    return 1 + (2 + (3 + (4 + fn(4 + 1))))
}
fn(1)
var res = fn(1);
console.log(res)
//用递归 求1到100同时能被2整除又能被3整除的所有数之和
function fn(num) {
    if (num > 100) {
        return 0;
    }
    if (num % 2 == 0 && num % 3 == 0) {
        return num + fn(num + 1)
    }
    return fn(num + 1);

}
console.log(fn(1))



//用for循环  求1到100同时能被2整除又能被3整除的所有数之和
var n = 0;
for (var i = 0; i <= 100; i++) {
    if (i % 2 == 0 && i % 3 == 0) {
        n = n + i;
    }
}
console.log(n)