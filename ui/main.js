console.log('Loaded!');
// change HTML element
var element= document.getElementById('main_text');
element.innerHTML="i just ran a java script on you";

var img=document.getElementById('madi');
var marginleft=0;
function moveRight(){
    marginleft=marginleft+5;
    img.style.marginleft=marginleft+'px';
}

img.onclick = function(){
    var interval = setInterval(moveRight,50);
    
    };