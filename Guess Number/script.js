const num = document.getElementById("num");
const resultbtn = document.getElementById("resultbtn");
const guessnum = document.getElementById("guessnum");
let maxnum = 100;
let minnum = 1;
let random = Math.floor(Math.random() * (maxnum - minnum + 1)) + minnum;
let attempt = 0;
let loop = true;
resultbtn.onclick = function () {
    let value = Number(num.value); 
    if (isNaN(value)) {
        guessnum.textContent = "Please Enter Valid number";
    }
    else if (value > random) {
        guessnum.textContent = "Your guess number is too high";
        attempt++;
    }
    else if (value < random) {
        guessnum.textContent = "Your guess number is too low";
        attempt++;
    }
    else {
        attempt++;
        guessnum.textContent =`Congratulation ${random} correct guess in ${attempt} attempt`;
        loop = false;
    }
}