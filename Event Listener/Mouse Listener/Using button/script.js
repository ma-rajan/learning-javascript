const container=document.getElementById("container");
const click=document.getElementById("click");

click.addEventListener("click",event=>{
    container.textContent="Your future is created by what you do today, not tomorrow.";
    container.style.backgroundColor="skyblue";
    container.style.color="white";
    container.style.fontSize="21px";
});

click.addEventListener("dblclick",event=>{
       container.textContent="The best time to plant a tree was 20 years ago. The second best time is now.";
    container.style.backgroundColor="red";
    container.style.color="white";
    container.style.fontSize="21px";
});

click.addEventListener("mouseover",event=>{
     container.textContent="You don’t have to be great to start, but you have to start to be great";
    container.style.backgroundColor="yellow";
    container.style.color="white";
    container.style.fontSize="21px";
});

click.addEventListener("mouseout",event=>{
     container.textContent="One year from now you may wish you had started today";
    container.style.backgroundColor="brown";
    container.style.color="white";
    container.style.fontSize="21px";
});
click.addEventListener("mouseup",event=>{
     container.textContent="It’s not that I’m so smart, it’s just that I stay with problems longer.";
    container.style.backgroundColor="purple";
    container.style.color="white";
    container.style.fontSize="21px";
});