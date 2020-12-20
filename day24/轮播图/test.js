let data=null;
let wrapper=document.getElementById('wrapper');
let list=document.getElementById('list');
let outer=document.getElementById('outer');
function getData(){
    let xhr=new XMLHttpRequest;
    xhr.open('get','./banner.json',false);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4&&/^2\d{2}$/.test(xhr.status)){
            data=JSON.parse(xhr.responseText);
        }
    }
    xhr.send();
    console.log(data);
    renderHtml(data);
}
getData();
function renderHtml(data){
    let wrapperItems='';
    let listItems='';
    data.forEach((item,index)=>{
        wrapperItems+=`<li ><img src="${item.img}" alt=""></li>`
        listItems+=`<li></li>`;
    });
    wrapperItems+=`<li ><img src="${data[0].img}" alt=""></li>`;
    wrapper.innerHTML=wrapperItems;
    list.innerHTML=listItems;   
}
let step=0
function autoMove(){
    step++;
    if(step>=5){
        wrapper.style.left='0px';
        step=1;
    }
    utils.animate(wrapper,{left:-step*800},1000);
    changeFocus();
}
let timer=setInterval(autoMove,3000);

outer.onmouseover=function(){
    clearInterval(timer);
}
outer.onmouseout=function(){
    timer=setInterval(autoMove,3000);
}

let tips=document.querySelectorAll('#list li')
function changeFocus(){
    for(let i=0;i<tips.length;i++){
        if(step==i){
         tips[i].classList.add('active');
        }
        else{
            tips[i].classList.remove('active');
        }        
    }
    if(step==4){
        tips[0].classList.add('active');
    }
}
changeFocus();

function bindClick(){
    for(let i=0;i<tips.length;i++){
        tips[i].onclick=function(){
            step=i-1;
            autoMove();
        }
    }
}
bindClick();

right.onclick=function(){
    autoMove();
}
left.onclick=function(){
    step-=2;
    if(step==-2){
        wrapper.style.left=data.length*-800+'px';
        step=data.length-2;
    }
    autoMove();
}



