function greet(name, callback) {
    console.log("Hello " + name);
    callback(); 
}
function sayBye() {
    console.log("How was your day!");
}
greet("Beautiful", sayBye);