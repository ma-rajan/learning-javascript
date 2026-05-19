//destructuring in function perimeter

function display({fname,lname,rollno,address,job}){
    console.log(`Name : `+fname+" "+lname);
    console.log(`Rollno : `+rollno);
    console.log(`Address :`+address);
    console.log(`Job : `+job);
}
const person1={
    fname: "spyder",
    lname: "man",
    rollno: 43,
    address: "New York",
    job: "Photographer"
};
const person2={
    fname: "John",
    lname: "Cena",
    rollno: 32,
    address: "Washing ton DC",
    job: "Wrestler"
};

display(person1);