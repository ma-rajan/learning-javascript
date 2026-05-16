//convert DOB in another format using map method:
let DOB = ["2004-12-01", "2005-2-14", "2006-3-04"];
function dob(element) {
    let d = element.split("-");
    return `${d[1]}-${d[2]}-${d[0]}`;
}
let newDOB = DOB.map(dob);
console.log(newDOB);