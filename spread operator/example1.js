let s=0;
function sum(...numbers){
    for(let number of numbers){
         s+=number;
    }
    return s;
}
let sn=sum(21,4,3,5,3);
console.log(`Sum of number is ${sn}`);