const btngenerate=document.getElementById("btngenerate");
const firstnum=document.getElementById("firstnum");
const secondnum=document.getElementById("secondnum");
const lbltitle=document.getElementById("lbltitle");
let rand;
btngenerate.onclick=function(){
    let num1=Number(firstnum.value);
    let num2=Number(secondnum.value);
    rand=Math.ceil(Math.random()*(num2-num1))+num1;
    lbltitle.textContent=rand;
}