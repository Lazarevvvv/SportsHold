document.querySelector('#click1').onclick=fun1;
document.querySelector('#click2').onclick=fun2;
document.querySelector('#click3').onclick=fun3;
document.querySelector('.c-hamburger').onclick=fun4;

var click1=document.querySelector('#click1');
var click2=document.querySelector('#click2');
var clic3=document.querySelector('#click3');
var tap1=document.querySelector('#tap1');
var tap2=document.querySelector('#tap2');
var tap3=document.querySelector('#tap3');
var hum1=document.querySelector('.c-hamburger');
var line1=document.querySelector('#line');
var table=document.querySelector('#table');
var img=document.querySelector('.img-block');


function fun1(){
    click1.classList.remove("opacity");
    click2.classList.add("opacity");
    click3.classList.add("opacity");
    tap1.classList.remove("second");
    tap2.classList.add("second");
    tap3.classList.add("second");
}
function fun2(){
    click1.classList.add("opacity");
    click2.classList.remove("opacity");
    click3.classList.add("opacity");
    tap1.classList.add("second");
    tap2.classList.remove("second");
    tap3.classList.add("second");
}
function fun3(){
    click1.classList.add("opacity");
    click2.classList.add("opacity");
    click3.classList.remove("opacity");
    tap1.classList.add("second");
    tap2.classList.add("second");
    tap3.classList.remove("second");
}

function fun4(){

    if(hum1.style.background=='rgb(98, 50, 50)'){
       hum1.style.background='#ff3264';
       line1.style.transform+='rotate(90deg)';
       table.style.display='none';
       img.style.display='block';
    }
    else{
        hum1.style.background='#623232';
        line1.style.transform+='rotate(90deg)';
        table.style.display='flex';
        img.style.display='none';

    }
}
