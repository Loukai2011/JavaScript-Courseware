var ary = [1, 1, 1, 3, 1, 2, 3, 2, 4];
function un(ary) {
 var newAry=[];
 for(var i=0;i<ary.length;i++){
     if(newAry.indexOf(ary[i])==-1){
         newAry.push(ary[i]);
     }
 }
    return newAry;
}
console.log(un(ary));

