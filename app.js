let gameSeq = [];
let userSeq = [];


let start = false;
let level = 0;


let colors = ["red","yellow","green","purple"];

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
     if(start == false){
        console.log("game started");
        start = true;

        levelUp();
     }

});



function gameFlash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
   btn.classList.remove("flash");
  },250);
}


function userFlash(btn){
   btn.classList.add("user-flash");
   setTimeout(function(){
    btn.classList.remove("user-flash");
   },250);
 }
 


function levelUp(){
   
   level++;
   
   h2.innerText = `level ${level}`;
    
  let random = Math.floor(Math.random()*3);

  let randclr = colors[random];
  let btn = document.querySelector(`.${randclr}`)
  gameSeq.push(randclr);
  console.log(gameSeq);

   gameFlash(btn);
   

}

function btnPress(){
  let btn = this;
  userFlash(btn);
  let usercolor = btn.getAttribute("id");
  userSeq.push(usercolor);
  console.log(userSeq);
  check(userSeq.length-1);
  
  
}

function check(idx){
   
   if(gameSeq[idx]==userSeq[idx]){
      if(gameSeq.length==userSeq.length){
         userSeq = [];
        setTimeout(levelUp,1000);
      }
     
   }else{
    h2.innerHTML = `Game Over Your Score is <b>${level}<b> <br>Press any key to restart`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function(){
      document.querySelector("body").style.backgroundColor = "white";
    },150);
   reset();
}
}




let btns = document.querySelectorAll(".btn");

for(btn of btns){
   btn.addEventListener("click",btnPress);
}



function reset(){
   start = false;
   level = 0;
   gameSeq = [];
   userSeq = [];

}
