//string to Upper case using .map() method
let Animals=["Dog","Cat","Goat","Hen","Horse"];
function ChangeUppercase(element){
    return element.toUpperCase();
}
let animals=Animals.map(ChangeUppercase);
console.log(animals);
console.log(`\n\n`);

//string to lower case using.map() method
function ChangeLowercase(Element){
    return Element.toLowerCase();
}
let animal=Animals.map(ChangeLowercase);
console.log(animal);