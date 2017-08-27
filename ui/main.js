console.log('Loaded!');
// change HTML element
var element= document.getElementById('main_text');
element.innerHTML="new value";

var img=document.getElementById('madi');
var marginleft=0;
moveRight(); {
    marginleft=marginleft+5;
    img.style.marginleft=marginleft+'px';
}

img.onclick= function(){
    var interval=setInterval(moveRight,50);
}