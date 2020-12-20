let timer=null;
let data=null;
let step=0;
let getData=()=>{
    $.ajax({
        url:'./banner.json',
        type:'get',
        async:false,
        success:function(res){
             data=res
            console.log(data);
        }

    });
}
getData();

let randerHtml=()=>{
   let imgs='';
   let lis='';
   $.each(data,function(index,item){
       imgs+=`<li><img src="${item.img}" alt=""></li>`;
       lis+=`<li></li>`;
   });
   imgs+=`<li><img src="${data[0].img}" alt=""></li>`
   $('#wrapper').html(imgs)
   $('#list').html(lis);
}
randerHtml();

let autoMove=()=>{

    step++;
    if(step==5){
    $('#wrapper').css('left','0');
    step=1;
    }
    changeFocus();
    $('#wrapper').animate({ left: -step * 800 }, 500);
}
timer=setInterval(autoMove,1000);

let changeFocus=()=>{
  if(step==4){
    $('#list li').eq(0).addClass('active').siblings().removeClass('active');
    return;
  }
    $('#list li').eq(step).addClass('active').siblings().removeClass('active');

}
changeFocus();

$("#outer").on("mouseover",()=>{
    clearInterval(timer);
});
$("#outer").on("mouseout",()=>{
    timer=setInterval(autoMove,1000);
});

$('#list li').click(function(){
console.log($(this).index());
 step=$(this).index()-1;
 autoMove();
});

$('#right').click(function(){
    autoMove()
});

$('#left').click(function(){
    step-=2;
    if(step == -2){
    $('#wrapper').css({left:-3200})
       step=2;
    }
    autoMove()
});

