const Temperature=document.getElementById("Temperature");
const choice1=document.getElementById("choice1");
const choice2=document.getElementById("choice2");
const resultbtn=document.getElementById("resultbtn");
const resultlbl=document.getElementById("resultlbl");

resultbtn.onclick=function(){
    let temp=Number(Temperature.value);
if(isNaN(temp)){
    resultbtn.textContent="Please enter temperature properly";
}
    let result;
    if(choice1.checked){
        result=(temp*9/5)+32;
        resultlbl.textContent=`Fahrenheit is : ${result}`;
    }else if(choice2.checked){
        result=(temp-32)*5/9;
        resultlbl.textContent=`Celcius is : ${result}`;
    }else{
          resultbtn.textContent="Please selecte Radio button properly";
    }
}