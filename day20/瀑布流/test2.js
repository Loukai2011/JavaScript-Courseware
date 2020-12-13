let uls=document.querySelectorAll("ul");
uls=Array.from(uls);
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
}
getData();

function renderHtml(data){
    for(let i=0;i<20;i++){
        let index=Math.round(Math.random()*9);
        let curImg=data[index];

        let li=document.createElement("li");
        let img=document.createElement("img");
        let p=document.createElement("p");

        p.innerHTML=curImg.title;
        img.style.height=Math.round(Math.random()*(250-180)+180)+"px";
        img.setAttribute("true-img",curImg.src);
        img.className="bg";

        li.appendChild(img);
        li.appendChild(p);

         uls.sort(function(a,b){
             return a.scrollHeight-b.scrollHeight;
         });

         uls[0].appendChild(li);
    }
}

let imgs=document.getElementsByClassName("bg");
function delay(){
    // debugger;
    for(let i=0;i<imgs.length;i++){
        delayImg(imgs[i]);
    }
}
function delayImg(img){
    let winH=utils.win("clientHeight");
    let winT=utils.win("scrollTop");

    let imgH=img.offsetHeight;
    let imgT=utils.offset(img).top;

    if(true){
        // debugger;
    
        let trueSrc=img.getAttribute("true-img");
        let newImg=document.createElement("img");
        newImg.src=trueSrc;
        
        newImg.onload=function(){
            img.src=trueSrc;
            img.classList.remove("bg");
        }
    }
}
// debugger;
delay();

// function isLoad(){
//     let winH=utils.win("clientHeight");
//     let winT=utils.win("scrollTop");
//     let bodyH=utils.
// }



window.onscroll=function(){
    

    delay();
    getData();


}


