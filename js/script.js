console.log('Test');

let name;
let age;
const oneAge = "fish";
let boy = false;
let man = true;

name= "Artem";
age=17;

console.log(typeof name, typeof age);
console.log(oneAge);


const header = document.querySelector ("headluck");
const testBtn = document.querySelector ('#btnclick');

console.log(typeof header);

function  SayHello () {
    let message = "Hello Java" +  name;
    console.log (message);
}
SayHello();

function simpleMath(a , b) {
    let one = a + b;
    console.log (one);
    return one;
}
let one = simpleMath (12,25);
console.log(one);




window.addEventListener("scroll" , cheackscroll)
document.addEventListener("DOMContentLoaded", cheackscroll) 


 function cheackscroll () {
    let scrollPos = this.window.scrollY;

    if(scrollPos > 0 ) {
        headluck.classList.add('red');

    } else {
        headluck.classList.remove('red');

    }
 }

testBtn.addEventListener("click" , function(item) {
    let count = "click" ;
        if (testBtn.clicked) { 
            btnclick.classList.remove('green'); 
        }
        else { 
            btnclick.classList.add('green');
         }
    console.log('clicked');
});

function cchek() {

var chbox;
chbox=document.getElementById('checkable');
if (chbox.checked) {
    alert('Choosen')
}
else {
    alert('None')
}
}


function radbut(){
    var radi=document.getElementsByName('r1');
    for(var i = 0 ; i < radi.length; i++) {
        if(radi[i].checked) {
            alert('Choosen ' +i+ ' elmnt' );
        }
    }
 }
function Selected() {
    var sel = document.getElementById('Select').selectedIndex;
    var options = document.getElementById('Select').options;
    alert('Selected option ' +options [sel].text);
}

function ranger2() {
    var rng=document.getElementById('r3');
    var p=document.getElementById('ten');
    var div=document.getElementById('test');
    test.style.width=rng.value+'em';
    p.innerHTML=rng.value;
}


document.getElementById('navmenu').onmouseover = function(event) {
    var target= event.target;
    if (target.className == 'menu-item') {
        var s = target.getElementsByClassName('submenu');
        closeMenu();
        s[0].style.display = 'block';
    }
}

document.onmouseover=function(event) {
    var target = event.target;
    console.log(event.target);
    if (target.className!='menu-item' && target.className!= 'submenu'){
        closeMenu();
    }
}

function closeMenu() {
    var menu = document.getElementById ('navmenu');
    var subm =document.getElementsByClassName('submenu');
    for (var i=0; i <subm.length; i++) {
        subm[i].style.display="none";
    }
}


var tab;
var tabContent;

window.onload=function () {
    tabContent=document.getElementsByClassName('tabContent');
    tab=document.getElementsByClassName('tab');
    hideTabsContent(1);
}

function hideTabsContent (a) {
    for (var i=a; i<tabContent.length; i++ ) {
        tabContent[i].classList.remove('show');
        tabContent[i].classList.add('hide');
        tab[i].classList.remove('whiteborder');
    }
}

document.getElementById('tabs').onclick=function (event) {
    var target=event.target;
    if (target.className == 'tab'){
        for(var i=0; i<tab.length; i++) {
            if(target ==tab[i]){
                showTabsContent(i);
                break;
            }
        }
    }
}

function showTabsContent(b) {
    if(tabContent[b].classList.contains('hide')) {
        hideTabsContent(0);
        tab[b].classList.add('whiteborder');
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    }
}

var modal =document.getElementById('myModal');
var btn =document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";

}
span.onlcick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if(event.target == modal) {
        modal.style.display = "none";
    }
}


function myMove() {
    var elem = document.getElementById('myAnim');
    var pos = 0 ;
    var id = setInterval(frame, 10 );
    function frame() {
        if (pos == 90) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }

}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides (slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    if(n > slides.length) {
        slideIndex = 1
    }
    if (n<1) {
        slideIndex=slides.length
    }
    for (i=0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i <dots.length; i++) {
        dots[i].className= dots[i].className.replace("active","");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += "active";
}