//calculate:
class Calculate{
    display(){
        console.log("Calcaultion of numbers are : ");
    }
}
class calculate extends Calculate{
    a;
    b;
       constructor(a,b){
        super();
        this.a=a;
        this.b=b;
    }
    sum(){
        console.log("sum is : "+(this.a+this.b));
    }
    diff(){
        console.log("Diff is : "+(this.a-this.b));
    }
    mul(){
        console.log("Mul is  : "+(this.a*this.b));
    }
    div(){
        console.log("Div is : "+(this.a/this.b));
    }
} 
let c=new calculate(9,6);
c.display();
c.sum();
c.diff();
c.mul();
c.div();