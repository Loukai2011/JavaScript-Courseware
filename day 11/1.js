console.log(fn);
if(true){
    console.log(fn);
    fn=3;
    console.log(fn);
    function fn(){}
    
    fn=5;
    console.log(fn);
    }
    console.log(fn);
    
    console.log(num);// undefined
    console.log(fn);// undefined
         if([]){
             // 只要进到当前if条件中，会立即对fn进行赋值；
             fn()
             var num=100;
             function fn(){console.log("a")}
             
         }
 console.log(fn);// undefined

 var utils=(function(){
    var num=0;
    function fn1(){
        console.log(1)
    }
    return {
        fn1:fn1
    }
})();
console.log(utils.fn1());