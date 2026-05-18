function rolldice(){
    let max=6;
    let min=1;
    let rand=Math.floor(Math.random()*max)+min;
    resultlbl.innerHTML=`
        <h1> You dice is ${rand} </h1>
        <img src="image/${rand}.png" width="120">`;  
}
    
