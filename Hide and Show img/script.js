const img = document.getElementById("img");
const result = document.getElementById("result");
result.addEventListener("click", event => {
    if (img.style.visibility === "hidden") {
        result.textContent = "Hide";
        img.style.visibility = "visible";
    } else {
        result.textContent = "Show";
        img.style.visibility = "hidden";
    }
});