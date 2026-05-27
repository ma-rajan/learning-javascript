const title = document.getElementById("title");
const paragraph = document.getElementById("paragraph");
const button = document.getElementById("btn");
button.onclick = function(){
    title.textContent = "Hello User";
    paragraph.textContent = "Nice to Meet you Welcome to my website";
    title.style.color = "red";
    paragraph.style.fontSize = "20px";
    document.body.style.backgroundColor = "lightblue";
}