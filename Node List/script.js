const buttons=document.querySelectorAll(".buttons");
buttons.forEach(button=>{
    button.style.backgroundColor="red";
    button.textContent="Button 🤪";
});


buttons.forEach(button=>{
    button.addEventListener("mouseover",event=>{
        event.target.style.backgroundColor="blue";
        event.target.style.color="white";
    });
});

buttons.forEach(button=>{
    button.addEventListener("click",event=>{
        event.target.style.backgroundColor="green";
        event.target.style.color="yellow";
    });
});
