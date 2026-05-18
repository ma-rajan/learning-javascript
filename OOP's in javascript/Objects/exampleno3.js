/*
Create a class named ‘Student ‘ with  variable ‘name’ and 
variable ‘rollno’. Assign the value of rollno as ‘2 and that of name as
“John” by creating an object of the class Student
*/
class Student{
    name;
    rollno;
    constructor(name,rollno){
        this.name=name;
        this.rollno=rollno;
    }
    display(){
        console.log(this.name+"\t"+this.rollno);
    }
}
 const s=new Student("Rajan",16);
s.display();