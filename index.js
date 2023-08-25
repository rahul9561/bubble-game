function makebubble(){
var bubble="";
 var value;

for(var i=1;i<169;i++){
     value=Math.floor(Math.random()*10);
   bubble +=`<div class="bubble"><span  id="round">${value}</span></div>`
}
document.querySelector('#pbbul').innerHTML=bubble;
}
makebubble();


var rn=0;
function gethit(){
    rn=Math.floor(Math.random()*10);
    document.querySelector('#gethit').textContent=rn;
}
gethit();
var timer=60;
 function runtime(){
 var timerint=  setInterval(() => {
    if(timer>0){
        timer--;
        document.querySelector('#timers').innerHTML=timer;
    }
    else{
        clearInterval(timerint)
        document.querySelector('#pbbul').innerHTML=`<h1>Game over </h1>`;
    }
}, 1000);
}
runtime();

document.querySelector('#pbbul').addEventListener('click',function(dot){
   var store=Number(dot.target.textContent)
   if(store===rn){
    scoreTm(); 
    gethit(); 
    makebubble();
        }
       
})
var score=0;
function scoreTm(){
   score+=10;
   document.querySelector('#score').textContent=score
}
