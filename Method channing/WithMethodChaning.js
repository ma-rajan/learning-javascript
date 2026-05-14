//With Method Chaning
let username=window.prompt("Enter your username : ");
let final=username.trim().charAt(0).toUpperCase()+username.trim().slice(1).toLowerCase();
console.log("Final String : "+final);