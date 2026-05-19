//Extract value from object
const person1={
    fname: "Ram",
    lname: "Bahadur",
    rollno: 12,
    address: "Chitwan",
    job: "carpentar"
};
const person2={
    fname: "Shyam",
    lname: "Bahadur",
    rollno: 15,
    address: "Pokhara",
    job: "unemployed"
};

const {fname,lname,rollno,address,job}=person1;
console.log(fname);
console.log(lname);
console.log(rollno);
console.log(address);
console.log(job);