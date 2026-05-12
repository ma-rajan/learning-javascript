// Area of circle 
let radius;
let r,area;
document.getElementById("mybutt").onclick=function(){
    radius=document.getElementById("mynum").value;
    r=Number(radius);
    area=Math.PI*r*r;
   document.getElementById("result").textContent=area;
}

