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

const basket=[];
const newCollectionAll=document.querySelectorAll('.new-collection')
const allPrice= document.querySelector('#butText');
var cost=0;
for (let i = 0; i < newCollectionAll.length; i++) {
    const newCollection=newCollectionAll[i];
    
    
    
    newCollection.onclick=function() {
        basket.push(newCollection);
        console.log(basket);
        
        const price=this.querySelector('span');
        var a = Number(price.innerText);
        newCollection.setAttribute('data-cost', a);

        cost +=Number(newCollection.getAttribute('data-cost'));
        console.log(cost);
        document.querySelector('#butText').innerHTML=cost;
        var Lengtha=basket.length;
        var AllLengtha=Lengtha +' ' +'Items';
        document.querySelector('#items').innerHTML=AllLengtha;
        
         newCollection.style.transition='all 0.2s';
        var num1=0;
        function rotate(){
            num1=num1+10;
            if(newCollection.style.transform=='rotateX(360deg)'){
                clearTimeout(timer);
                num1=0;
                newCollection.style.transition='none';
                newCollection.style.transform='rotateX(0)';
                
            }
            else{
                newCollection.style.transform='rotateX('+num1+'deg)';
                var timer=setTimeout(rotate, 100);
            }
        }
        rotate();

    }
}

document.querySelector('#numbe').onclick=Basket;
document.querySelector('#butText').onclick=Basket;
document.querySelector('#butImg').onclick=Basket;
document.querySelector('#items').onclick=Basket;
const allBasket=document.querySelector('.allbasket');
function Basket (){
    if(allBasket.style.right==='0px'){
        allBasket.style.right='-1000px';
    }
    else{
        allBasket.style.right='0px';
    }
}



