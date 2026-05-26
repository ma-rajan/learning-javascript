//DOM Navigation

//.firstElementChild
const elementfirst=document.getElementById("fruits");
const e_first=elementfirst.firstElementChild;
e_first.style.backgroundColor="red";


//.lastElementChild
const elementsecond=document.getElementById("animales");
const e_second=elementsecond.lastElementChild;
e_second.style.backgroundColor="green";

//.nextElementSibling
const elementthird=document.getElementById("courses");
const e_third=elementthird.nextElementSibling;
e_third.style.backgroundColor="blue";

//.parentElement
const prev=elementthird.parentElement;
prev.style.backgroundColor="brown";

//.children

const childc=elementfirst.children;
childc.style.backgroundColor="white";