let data=null;
let imgs=document.getElementsByClassName("bg");
let uls=Array.from(document.querySelectorAll("ul"));
function getData(){
    let xhr=new XMLHttpRequest;
    xhr.open("get","./data.txt",false);
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

function renderHtml(){
    for(var i=0;i<20;i++){
        let index=Math.round(Math.random()*9);
        let curImg=data[index]; 

        let li=document.createElement("li");
        let img=document.createElement("img");
        let p=document.createElement("p");

        img.style.height=Math.round(Math.random()*(260-180)+180)+"px";
        img.setAttribute("true-img",curImg.src);
        p.innerText=curImg.title;
        img.className="bg";

        li.appendChild(img);
        li.appendChild(p);

        uls.sort(function(a,b){
            return a.scrollHeight-b.scrollHeight
        });
        uls[0].appendChild(li);

    }
}

function delay(){
    for(var i=0;i<imgs.length;i++){
        delayImg(imgs[i]);
    }
}

function delayImg(img){
    let imgH=img.offsetHeight;
    let imgT=utils.offset(img).top;

    let winH=utils.win("clientHeight");
    let winT=utils.win("scrollTop");

    if(winT+winH>=imgH+imgT){
        let trueSrc=img.getAttribute("true-img");
        let newImg=new Image;
        newImg.src=trueSrc;

        newImg.onload=function(){
            img.src=trueSrc;
            img.className="";
        }
    }
}
delay();

function isLoad(){
    let winH=utils.win("clientHeight");
    let winT=utils.win("scrollTop");

    let bodyH=utils.win("scrollHeight");
    if(winH+winT+100>bodyH){
        getData();
    }
}
window.onscroll=function(){
    isLoad();
    delay();
    
}
