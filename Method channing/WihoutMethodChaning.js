//without method channing
let username=window.prompt("Enter your name : ");
let name=username.trim();
name =name.charAt(0);
name=name.toUpperCase();

let extra=username.slice(1);
extra=extra.toLowerCase();
let final=name+extra;
console.log("Final name is : "+final);