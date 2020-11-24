    var a=0;
    if(true){
   console.log(a); // function fn
   a=1;
   console.log(a);//1
   function a(){};
   a=21;// 特殊记忆：在判断语句中，如果出现function，在function 后面再对此变量进行改值，改变的是私有的
   console.log(a);//21
    }
    console.log(a);