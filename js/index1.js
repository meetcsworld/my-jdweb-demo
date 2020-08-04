//  主轮播

//定义一个全局变量表示当前显示的图片的索引
var currentIndex = 0;

// 将轮播切换到指定的图片上
function slideTo(index) {

    if (index === 8) {
        index = currentIndex = 0
    }

    if (index === -1) {
        index = currentIndex = 7;
    }

    var lis = document.querySelectorAll('.slide .slideli li');
    var dot = document.querySelectorAll('.pagedot li');
    //清除旧焦点
    //xxx.classList.remove(yyyClass)
    //xxx.classList.add(xxxClass)


    //取得当前图片，切换图片，使上一张图片隐藏，下一张显示
    document.querySelector('.current').classList.remove('current');
    document.querySelector('.active').classList.remove('active');
    lis[index].classList.add('current');
    dot[index].classList.add('active');
   


}



//左右箭头绑定点击事件
document.querySelector('.slide .prev').onclick = function () {
    slidePrev()
    //  console.log("1");
}

document.querySelector('.slide .next').onclick = function () {
    slideNext()
}

//定义函数实现点击左右箭头轮播
function slideNext() {
    currentIndex++
    slideTo(currentIndex)
}

function slidePrev() {
    currentIndex--
    slideTo(currentIndex)
}


//取得所有的圆形点，依次遍历
var bullets = document.querySelectorAll('.pagedot .bullet');
for (var i = 0; i < bullets.length; i++) {
    bullets[i].index = i;

    //鼠标滑过实现轮播
    bullets[i].onmouseover = function () {
        //  console.log(this.index);
        currentIndex = this.index;
        slideTo(currentIndex)
        
    }
}



//鼠标移到图片轮播停止
document.querySelector('.slide').onmouseover = function () {
    stop()
}
//鼠标移开图片轮播继续
document.querySelector('.slide').onmouseout = function () {
    auto()
}

//自动轮播
var flag;

function auto() {
    flag = setInterval(function () {
        slideNext();
    }, 3000)
}
//停止轮播
function stop() {
    clearInterval(flag)
}
auto();










//  右侧轮播



var nowIndex = 0;

// 将轮播切换到指定的图片上
function rslideTo(index) {

    if (index === 3) {
        index = nowIndex = 0
    }

    if (index === -1) {
        index = nowIndex = 2;
    }
    var rli = document.querySelectorAll('.rightlist ul');


    document.querySelector('.now').classList.remove('now');


    rli[index].classList.add('now')

}

//定义函数实现点击左右箭头轮播
function rslideNext() {
    nowIndex++
    rslideTo(nowIndex)
}

function rslidePrev() {
    nowIndex--
    rslideTo(nowIndex)
}


//左右箭头绑定点击事件
document.querySelector('.rightlist .prev').onclick = function () {
    rslidePrev()
    // console.log("1");
}

document.querySelector('.rightlist .next').onclick = function () {
    rslideNext()
    //  console.log("2");
}



//鼠标移到图片轮播停止
document.querySelector('.rightlist').onmouseover = function () {
    rstop()
}
//鼠标移开图片轮播继续
document.querySelector('.rightlist').onmouseout = function () {
    rauto()
}

//自动轮播
var flag1;

function rauto() {
    flag1 = setInterval(function () {
        rslideNext();
    }, 4000)
}


//停止轮播
function rstop() {
    clearInterval(flag1)
}
rauto();









// 秒杀列表




// var lita= document.getElementsByClassName('.seckli').children;
// lita.style.webkitTransform="translate3d(-20px,0,0)";



// 封装getStyle函数
function getStyle(obj, attr) {
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj, false)[attr];
}


//    var aBox=document.getElementById("seckli");
//  alert(getStyle(aBox, 'width'));
var seckl = document.querySelector('#seckli .prev');
var seckr = document.querySelector('#seckli .next');
var aitem = document.getElementById("aitems");

seckl.onclick = function () {
    // console.log("l");
    var dis = parseInt(getStyle(aitem, 'left'));

    if (dis < -800) {

        dis = -800;

    } else if (dis < 0) {

        dis = 0;
    } else {
        dis = -1600;
    }
    aitem.style.left = dis + "px";

    // console.log(dis);
}

seckr.onclick = function () {
    // console.log("r");
    var dis = parseInt(getStyle(aitem, 'left'));

    if (dis < -800) {
        aitem.style.left = "0px";
    } else {
        dis = dis - 800;
        aitem.style.left = dis + "px";
    }


    // console.log(dis);
}











//  秒杀块操控


// var slideli = document.querySelectorAll('.seckbrand a');

var dotl = document.querySelector('.dotbtn .dotl');
var dotr = document.querySelector('.dotbtn .dotr');


var sall = document.getElementById("stotal");
// console.log(getStyle(sall, 'width'));
var showx = parseInt(getStyle(sall, 'left'));





var timer = null;
var speed = -1;  //正负为方向

var ali = sall.getElementsByTagName('a');
var sawidth= ali[0].offsetWidth;//a宽度
sall.style.width =  sawidth* ali.length + 'px';

// console.log(sall.style.width);
timer = setInterval(lmove, 10) 




function lmove() {  //自动轮播
    if (sall.offsetLeft < -sall.offsetWidth / 2) {
        sall.style.left = '0';
    }
    if (sall.offsetLeft > 0) {
        sall.style.left = -sall.offsetWidth / 2 + 'px';
    }
    sall.style.left = sall.offsetLeft + speed + 'px';
}






// 鼠标进出状态
var dotdiv=document.querySelector('.seckbrand .dotbtn ');
// document.getElementsByClassName("dotbtn")[0]

dotdiv.onmouseover=function(){
    clearInterval(timer);
   
}
dotdiv.onmouseout=function(){
    timer=setInterval(lmove,10)
  }

  


dotl.onmouseover = function () {
    dotr.classList.remove("active");
    dotl.classList.add("active");

    sall.style.left = -sawidth*2+ "px";
    
    // console.log("slide1");

}
dotr.onmouseover = function () {
    dotl.classList.remove("active");
    dotr.classList.add("active");
    sall.style.left = -sawidth + "px";
    
    // console.log("slide2");
}


