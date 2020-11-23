var ary=[8,2,1,5];
/*  
  需求：排序（升序）
  第一轮比较： 
         [2,1,5,8] 经过一轮比较，得到第一个最大数8
  第二轮：
         [1,2,5,8]经过第二轮比较得到了第二个最大数 5
 第三轮：
         [1,2,5,8]经过三轮比较得到了第二个最大的数：2


       
第一次：[2,1,5,8] 正常的时候两两比较：ary.length-1-0;
第二次：[1,2,5,8] ary.length-1-1;
第三次：[1,2,5,8] ary.length-1-2;
  轮数的规律：ary.length-1
  两两比较的规律:ary.length-1-已经比过的轮数
*/
function mySort(){
    //轮数
    for(var i=0;i<ary.length-1;i++){
        //两两比较
        for(var j=0;j<ary.length-1-i;j++){
            //当前项比下一项大，就换位置
           if(ary[j]>ary[j+1]){
               //把ary[j]的值临时存储一下
            var temp=ary[j];
            ary[j]=ary[j+1];
            ary[j+1]=temp;
           }
        }
    }
    return ary;
}
var ary=[8,2,1,5];
console.log(mySort(ary));

// 快速排序
function quickSort(ary){
    if(ary.length<=1){
        return ary;
    }
    //中间项的索引
    var centerIndex=Math.floor(ary.length/2);
    //中间项
    var centerValue=ary.splice(centerIndex,1)[0];
    var leftAry=[],rightAry=[];
    for(var i=0;i<ary.length;i++){
        if(ary[i]<centerValue){
            leftAry.push(ary[i]);
        }
        else{
            rightAry.push(ary[i]);
        }
    }
    return quickSort(leftAry).concat(centerValue,quickSort(rightAry));
}
var ary=[11,15,17,18,19,10,4];
console.log(quickSort(ary));
