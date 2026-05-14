let st="Rajan";
// to find the length of string :
 let len=st.length;
 console.log("String length is : "+len+"\n");

 //Convert string into upper case:
 console.log("String in uppercase : "+st.toUpperCase()+"\n");

 //Convert string into lower case:
 console.log("String in lowercase : "+st.toLowerCase());

 //To find character of index
 console.log("Character at index : "+st.charAt(2));

 //TO find index of character
 console.log("Index of character :  "+ st.indexOf("j"));

 //To find the last index of character
 console.log("Last index of charcter : "+st.lastIndexOf("j"));

 //To remove spaces :
 let str=" Banana ";
 console.log("To Remove space from text : "+str.trim());

 //slice function in string:
 let name="Mango";
 console.log("final string : "+name.slice(2,3));
 console.log("Final string : "+name.slice(2));

 //replace method: 
 console.log("Replace : "+name.replace("Mango","Orange"));

//split method :
let text = "apple,banana,mango";
console.log(text.split(","));