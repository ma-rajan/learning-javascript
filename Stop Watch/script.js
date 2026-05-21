let hours=0;
let minutes=0;
let seconds=0;
let milliseconds=0;
let time=null;
const display=document.getElementById("display");
function update(){
    milliseconds+=10;
    if(milliseconds==1000){
        milliseconds=0;
        seconds++;
    }
    if(seconds==60){
        seconds=0;
        minutes++;
    }
    if(minutes==60){
        minutes=0;
        hours++;
    }

    let h=String(Math.floor(hours)).padStart(2,"0");
    let m=String(Math.floor(minutes)).padStart(2,"0");
    let s=String(Math.floor(seconds)).padStart(2,"0");
    let millsec=String(Math.floor(milliseconds/10)).padStart(2,"0");
    display.textContent=`${h} : ${m} : ${s} :${millsec}`;
}

function start(){
    if(time!==null)
        {return;
        }
    time=setInterval(update,10);
}
function stop(){
    clearInterval(time);
    time=null;
}
function reset(){
    clearInterval(time);
    time=null;

    hours=0;
    minutes=0;
    seconds=0;
    milliseconds=0;

    display.textContent=`00 : 00 : 00 : 00`;
}