class Add{
    a;
    b;
    constructor(a,b){
        this.a=a;
        this.b=b;
    }
    display(){
        console.log("sum of number is : "+(this.a+this.b));
    }
}
class Sub{
    a;
    b;
    constructor(a,b){
        this.a=a;
        this.b=b;
    }
    display(){
        console.log(`Subtraction of number is : `+(this.a-this.b));
    }
}

let aa=new Add(4,5);
let s=new Sub(7,4);
aa.display();
s.display();
