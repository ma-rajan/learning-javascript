const header=document.querySelector("h2");
const container=document.querySelector("body");
container.style.marginLeft="250px"
container.style.marginTop="150px"
container.style.backgroundColor="#f7d195";
container.style.color="white";
const group=document.querySelector(".group");
group.style.backgroundColor="#c3a87e";
group.style.border="2px solid";
group.style.width="400px";
group.style.height="300px"
group.style.textAlign="center";
group.style.boxShadow="4px 5px 10px"
const button=document.querySelector("button");
button.style.padding="7px";
button.style.fontWeight="Bold";

button.style.color="white";
button.style.backgroundColor="#DA9B24";
button.style.boxShadow="2px 3px 11px 6px ";
button.style.borderColor="white";
button.style.cursor="pointer";

//Like java actionlistner it is also in DOM
button.addEventListener("mouseenter", () => {
    button.style.backgroundColor = "skyblue";
});

button.addEventListener("mouseleave", () => {
    button.style.backgroundColor = "blue";
});



const p=document.querySelector("p");

function button1(){
   let r=Math.floor(Math.random()*20)+1;
   if(r==1){
    p.innerHTML="🔮 Future scanning complete… You will open this page again just to see if something new appeared, even though you already know it’s random 😄";
   }
    if(r==2){
    p.innerHTML="📡 Prediction system active… You are about to get distracted by something completely unrelated to what you were doing 5 minutes ago.";
   }
    if(r==3){
    p.innerHTML="⚠️ Warning from the future: You are overthinking small things again. The universe suggests relaxing… but you probably won’t listen 😆";
   }
    if(r==4){
    p.innerHTML="💻 AI analysis done… Your productivity is currently low, but your curiosity level is extremely high. Dangerous combination detected";
   }
    if(r==5){
    p.innerHTML="🔮 Future update: You will start something productive soon… but first, you will scroll a little more ‘for no reason";
   }
    if(r==6){
    p.innerHTML="📱 System alert: You will check your phone even if there is no notification, vibration, or reason at all";
   }
    if(r==7){
    p.innerHTML="🧠 Brain status: Thinking about being productive, while actively choosing the ‘later’ option again";
   }
    if(r==8){
    p.innerHTML="🚀 Future report: Success is loading… but the loading bar seems stuck. Please wait or restart motivation";
   }
    if(r==9){
    p.innerHTML="😂 Humor prediction: You will smile at this message, then pretend it wasn’t funny, even though it was";
   }
    if(r==10){
    p.innerHTML="⏳ Time check: In a few minutes, you will forget why you opened this page, but still stay here anyway";
   }
    if(r==11){
    p.innerHTML="📊 Analysis complete: You are 60% curious, 30% distracted, and 10% wondering why you’re still reading this";
   }
    if(r==12){
    p.innerHTML="🔋 Energy level: Low. But scrolling ability: Unlimited. This is your hidden superpower.";
   }
    if(r==13){
    p.innerHTML="🌍 Future insight: One day you will achieve big success, but today’s mission is still figuring out what to do next.";
   }
    if(r==14){
    p.innerHTML="📡 Connection unstable… but one thing is certain: you will visit this page again just for fun";
   }
    if(r==15){
    p.innerHTML="🎯 Final prediction: You will close this tab, open another app, and then randomly remember this message later at night.";
   }
    if(r==16){
    p.innerHTML="🔮 Future scan complete… You will try to be productive today, but somehow end up doing everything except the important task.";
   }
    if(r==17){
    p.innerHTML="📡 Prediction active… You are about to open another app, forget why you came here, and still pretend it was intentional.";
   }
    if(r==18){
    p.innerHTML="⚠️ Alert from future: That thing you’re worrying about right now? It won’t even matter as much as you think it will.";
   }
    if(r==19){
    p.innerHTML="💻 System check… Your focus level is currently switching between ‘I will do it’ and ‘maybe later’ every 10 seconds";
   }
    if(r==20){
    p.innerHTML="🎯 Final forecast: You will close this page soon… but your brain will randomly replay it when you’re doing something serious.";
   }

}


