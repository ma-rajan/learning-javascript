class Student{
    constructor(name,address){
        this.name=name;
        this.address=address;
    }
     display(){
        console.log(this.name+"\n"+this.address);
    }
}
let s=new Student("Rajan","Chitwan");
s.display();