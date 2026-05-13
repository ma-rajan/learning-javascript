const Subscription = document.getElementById("Subscription");
const visa=document.getElementById("visa");
const master=document.getElementById("master");
const atm=document.getElementById("atm");
const resultbtn=document.getElementById("resultbtn");
const resultlbl1=document.getElementById("resultlbl1");
const resultlbl2=document.getElementById("resultlbl2");

resultbtn.onclick=function(){
    if(Subscription.checked){
        resultlbl1.textContent="Subscribed";
    }else{
        resultlbl1.textContent="Not Subscribed";
    }
    if(visa.checked){
        resultlbl2.textContent="Visa Card selected";
    }else if(master.checked){
            resultlbl2.textContent="Master Card selected";
    }else if(atm.checked){
            resultlbl2.textContent="ATM Card selected";
    }else{
        resultlbl2.textContent="No Card is Selected";
    }
}
