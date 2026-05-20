//using closure and object function
function Count(){
    let count=0;
    function increase(){
        count++;
        console.log(`Increment value is : ${count}`);
    }
    return {increase};
}
const counter=Count();
counter.increase();
counter.increase();
counter.increase();