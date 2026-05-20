function clock(){
    const now=new Date();
    hours=now.getHours().toString();
    const setampm=hours>=12?"PM":"AM";
    hours=hours%12 ||12;
    minutes=now.getMinutes().toString();
    seconds=now.getSeconds().toString();
    time=`${hours} : ${minutes} : ${seconds} ${setampm}`;
    document.getElementById("clock").textContent=time;

}
clock();
setInterval(clock,1000);