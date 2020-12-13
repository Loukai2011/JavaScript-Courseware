let uls = document.getElementsByTagName("ul");
let imgs = document.getElementsByClassName("bg");
document.querySelectorAll//获取的元素没有映射功能
uls = Array.from(uls);

function getData() {
    let data = null;
    let xhr = new XMLHttpRequest;
    xhr.open("get", './data.txt', false);

    xhr.onreadystatechange = function () {
        if (/^2\d{2}$/.test(xhr.status) && xhr.readyState === 4) {
            data = JSON.parse(xhr.responseText)
        }
    }
    xhr.send();
    console.log(data);
    renderHtml(data);
}
getData();

function renderHtml(data) {
    for (let i = 0; i < 20; i++) {
        let index = Math.round(Math.random() * 9);
        let curImg = data[index];

        let li = document.createElement("li");
        let img = document.createElement("img");
        let p = document.createElement("p");

        p.innerText = curImg.title;
        img.setAttribute("true-img", curImg.src);
        img.className = "bg";
        img.style.height = Math.round(Math.random() * (250 - 180) + 180) + "px";

        li.appendChild(img);
        li.appendChild(p);

        uls.sort(function (a, b) {
            return a.scrollHeight - b.scrollHeight;
        });
        uls[0].appendChild(li);

    }

}


//图片懒加载

function delay() {
    for (let i = 0; i < imgs.length; i++) {
        delayImg(imgs[i]);
    }
}

function delayImg(img) {
    let imgH = img.offsetHeight;
    let imgT = utils.offset(img).top;

    let winH = utils.win("clientHeight");
    let winT = utils.win("scrollTop");

    if (winH + winT + 150 >= imgH + imgT) {
        //先获取当前真实的路径
        //然后创建一个img元素，利用img元素去校验当前的路径，如果正确
        //那当前的onload对应的函数会执行
        //如果onload执行了，咱们的onload对应的函数把把正确的路径赋值到页面上的img元素

        let trueSrc = img.getAttribute("true-img");
        let newImg = document.createElement("img");
        newImg.src = trueSrc;

        newImg.onload = function () {
            img.src = trueSrc;
            img.classList.remove("bg");
            fadeIn(img);
        }
    }

    function fadeIn(img) {
        utils.css(img, 'opacity', 0.01);
        let distance = utils.css(img, 'opacity');
        let timer = setInterval(() => {
            distance += 0.03;
            utils.css(img, 'opacity', distance);
            if (distance >= 1) {
                clearInterval(timer)
            }
        },1000)
    }

}
delay();

function isLoad() {
    //函数就是当前数据是否需要继续加载
    //当前body的真实高度===浏览器卷曲的高度+浏览器可是区域的一屏的高度
    let winH = utils.win("clientHeight");
    let winT = utils.win("scrollTop");
    let bodyH = utils.win("offsetHeight")
    if (winH + winT + 200 > bodyH) {
        getData();
    }
}

let back = document.getElementById("back");
back.onclick = function () {
    //移动距离是100
    let winT = utils.win("scrollTop");
    let part = winT / 50;
    let timer = setInterval(function () {
        winT = winT - part;
        utils.win("scrollTop", winT);
        if (winT <= 0) {
            clearInterval(timer);
        }
    }, 20);
}

function isButtonShow() {
    let winH = utils.win("clientHeight");
    let winT = utils.win("scrollTop");
    if (winT > winH) {
        utils.css(back, "display", "block");
    }
    else {
        utils.css(back, "display", "none");
    }
}
window.onscroll = function () {
    delay();
    isLoad();
    isButtonShow()
}

