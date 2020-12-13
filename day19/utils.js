let utils=(function(){
    function offset(box){
        let left=box.offsetLeft;
        let top=box.offsetTop;   // 一上来不管三七二十一先获取一下当前元素距离父级参照物的偏移量
        let parent=box.offsetParent; // 然后在获取一下当前元素的父级参照物
        while(parent!==document.body){// 如果当前元素的父级参照物不是body那就要进行累加操作
           left+=parent.offsetLeft+parent.clientLeft;
           top+=parent.offsetTop+parent.clientTop;
           parent=parent.offsetParent;// 再次获取当前父级参照物的父级参照物
        }
        return{
           left,top
        }

       }
       function win(attr,value){
        //    console.log(attr);
        if(value==undefined){
         return document.documentElement[attr] || document.body[attr];
        }
        document.documentElement[attr]=value;
        document.body[attr]=value;
        
        }
    return {offset,win}


})();
