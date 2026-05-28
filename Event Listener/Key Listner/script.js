const container = document.getElementById("container");

container.addEventListener("keydown", event => {
    container.style.backgroundColor = "yellow";
    container.textContent = "😎";
    container.style.fontSize = "5rem";
});

container.addEventListener("keyup", event => {
    container.style.backgroundColor = "red";
    container.textContent = "☠️";
    container.style.fontSize = "5rem";
});