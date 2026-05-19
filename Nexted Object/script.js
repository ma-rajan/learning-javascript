//nexted object eg
class Person{
    constructor(name,age,...address){
        this.name=name;
        this.age=age;
        this.address=new Address(...address);

    }
}
class Address{
    constructor(place,city,country){
        this.place=place;
        this.city=city;
        this.country=country;
    }
}
const person1=new Person("John cena",65,"231 DC","Washing Ton","USA");
const person2=new Person("Samba",54,"Chitwan","parsa","Nepal");
console.log(person1.name);
console.log(person1.age);
console.log(person1.address.city);
