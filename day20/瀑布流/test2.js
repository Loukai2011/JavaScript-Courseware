let uls=document.getElementsByTagName('ul');
uls=Array.from(uls);
let imgs=document.getElementsByClassName('bg');
let back=document.getElementById('back');

function getData(){
    let data=null;
    let xhr=new XMLHttpRequest;
    xhr.open('get','./data.txt',false);
    xhr.onreadystatechange=function(){
        if(/^2\d{2}$/.test(xhr.status)&&xhr.readyState===4){
            data=JSON.parse(xhr.responseText);
        }
    }
    xhr.send();
    renderHtml(data);
    console.log(data);
}
getData();
function renderHtml(data){
    for(let i=0;i<20;i++){
        let index=Math.round(Math.random()*9);
   let curImg=data[index];

    let li=document.createElement('li');
    let img=document.createElement('img');
    let p=document.createElement('p')

    img.setAttribute('true-img',curImg.src);
    img.className='bg';
    img.style.height=Math.round(Math.random()*(250-180)+180)+'px';
    p.innerText=curImg.title;

    li.appendChild(img);
    li.appendChild(p);

    uls.sort(function(a,b){
        return a.offsetHeight-b.offsetHeight;
    });
    uls[0].appendChild(li);
    } 
}

function delay(){
 for(let i=0;i<imgs.length;i++){
     delayImg(imgs[i]);
 }
}
function delayImg(img){
    let winH=utils.win('clientHeight');
    let winT=utils.win('scrollTop');

    let imgH=img.scrollTop;
    let imgT=utils.offset(img).top;

    if(winH+winT+200>imgH+imgT){
        let newImg=document.createElement('img');
        let trueSrc=img.getAttribute('true-img');
        newImg.src=trueSrc;
        newImg.onload=function (){
            img.src=trueSrc;
            img.classList.remove('bg');
            fadeIn(img);
        }
    }
}
delay();

function fadeIn(img){
    utils.css(img,'opacity',0.1);
    let a=Number(utils.css(img,'opacity'));
    let timer=setInterval(()=>{
        if(a>=1){
            clearInterval(timer);
        }
        a+=0.01;
        utils.css(img,'opacity',a);
    },17)

}

function isLoad(){
    let winH=utils.win('clientHeight');
    let winT=utils.win('scrollTop');
    let bodyH=utils.win("offsetHeight")
    if(winT+winH+250>bodyH){
        getData();
    }
}
function isButtonShow(){
    let winH=utils.win('clientHeight');
    let winT=utils.win('scrollTop');
    if(winT>winH){
        back.style.display='block';
    }
    else{
        back.style.display='none';
    }
}
back.onclick=function(){
    let winT=utils.win('scrollTop');
    let part=winT/50;
    let timer=setInterval(()=>{
        if(winT<=0){
            clearInterval(timer);
        }
        winT-=part;
        utils.win('scrollTop',winT)
     

    },17)
}
window.onscroll=function(){
    delay();
    isLoad();
    isButtonShow();
}
