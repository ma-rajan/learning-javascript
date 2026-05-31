const names=["Rajan","Mikasa","Ranjana","Raja","Rahaul"];
const jsonString=JSON.stringify(names);
console.log(jsonString);

const persons={
    "Name":"Mikasa",
    "Rollno":32,
    "Address":"Kathmandu",
    "Phoneno":"9716273884",
    "hobbies" : ["Reading","Dancing","Gardining","Cooking"]
}
let jsonpersons=JSON.stringify(persons);
console.log(jsonpersons);
