let gameSeq = [];
let userSeq = [];

let btnColors = ["red","orange","blue","voilet"];
let started = false;
let level =0;
 
let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game started....");
        started = true;

        levelUp();
    }
})
 
function levelUp(){
    level++;
    h2.innerText = `Level ${level}`; 
  
    let ranIndx = Math.floor(Math.random()*3);
    let randColor = btnColors[ranIndx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(randColor);
    // console.log(ranIndx);
    gameFlash(randBtn);
}

function gameFlash(btn){
    btn.classList.add("gameFlash");
    setTimeout(() => {
        btn.classList.remove("gameFlash");
    }, 250);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(() => {
        btn.classList.remove("userFlash");
    }, 250);
}
function checkAns(indx){
    //let indx = level -1;
    if(userSeq[indx] == gameSeq[indx]){
        if(gameSeq.length === userSeq.length){
            setTimeout(levelUp,1000);
            // levelUp();
        }
    }else{
        h2.innerHTML = `Game over ! <b>Your Level is:${level}</b><br> Press any key to start`;
    }
}
function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id"); 
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started = false;
    gameSeq = [];
    userSeq =[];
    level =0;
}   