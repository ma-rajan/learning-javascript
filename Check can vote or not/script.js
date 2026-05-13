const age=document.getElementById("age");
const check=document.getElementById("check");
const result=document.getElementById("result");
let a;
check.onclick=function(){
    a=age.value;
    a=Number(a);
    if(a<0){
        result.textContent="Please Enter Correct Age";
    }else if(a>=18){
        result.textContent="You Are Eligible TO Vote";
    }else{
        result.textContent="You Are not Eligible TO Vote";
    }
}