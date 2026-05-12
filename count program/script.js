const increasebtn=document.getElementById("increase");
const decreasebtn=document.getElementById("decrease");
const resetbtn=document.getElementById("reset");
const countlbl=document.getElementById("count");
let count=0;
increasebtn.onclick=function(){
    count++;
    countlbl.textContent=count;
}
decreasebtn.onclick=function(){
    count--;
    countlbl.textContent=count;
}
resetbtn.onclick=function(){
    count=0;
    countlbl.textContent=count;
}