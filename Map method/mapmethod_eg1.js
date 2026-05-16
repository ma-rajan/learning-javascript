//Square each element of array
let arr=[4,2,1,6,7,5];
function square(element){
    return (Math.pow(element,2));
}
result=arr.map(square);
console.log(result);




// forEach -> only performs action
// map -> returns new array