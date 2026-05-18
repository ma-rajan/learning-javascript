/*
Write a program in java to display the multiplication table of a given
integer
*/
class Multiply{
    i;
    n;
    constructor(n){
        this.n=n;
    }
    display(){
        for(let i=1;i<=10;i++){
        console.log(this.n+"*"+i+"="+(this.n*i));
    }
}
}

const m1=new Multiply(5);
m1.display();
 
console.log("\n")
const m2=new Multiply(9);
m2.display(); 
