const container=document.getElementById("container");
container.addEventListener("click",background);

function background(event){
    event.target.style.backgroundColor="yellow";
    event.target.textContent="Small steps every day may feel slow, but they’re quietly building something that will surprise you tomorrow.";
    event.target.style.fontSize="25px";
}

container.addEventListener("keydown",fun2);
function fun2(event){
    event.target.style.backgroundColor="green";
    event.target.textContent="Don’t wait for the perfect moment — take the moment and make it perfect with your effort";
    event.target.style.fontSize="25px";
}
container.addEventListener("mouseover",fun3);
function fun3(event){
     event.target.style.backgroundColor="blue";
    event.target.textContent="Success doesn’t come from what you do occasionally, it comes from what you do consistently.";
    event.target.style.color="white";
    event.target.style.fontSize="25px";
}

container.addEventListener("mouseout",function fun4(event){
        event.target.style.background="pink";
        event.target.textContent="You don’t have to be perfect to start — but you have to start to become great.";
            event.target.style.color="red";
             event.target.style.fontSize="25px";
});