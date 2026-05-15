function result(){
    let max=21;
    let min=1;
    let rand=Math.floor(Math.random()*max)+min;
    resultlbl.innerHTML=`
    <h4>You got ${rand} no.</h4>
    <img src="image/${rand}.png" width="350">
    `
}