const body1=document.getElementsByTagName("body")[0]

function setcolor(name,tcolor){
    body1.style.backgroundColor=name;
    body1.style.color=tcolor;
}
function setRandomColor(){
    const red=Math.round(Math.random()*255)
    const green=Math.round(Math.random()*255)
    const blue=Math.round(Math.random()*255)
    const color=`rgb(${red},${green},${blue})`
    body1.style.backgroundColor=color;
}
