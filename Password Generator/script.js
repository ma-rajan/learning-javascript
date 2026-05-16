const passwordbtn=document.getElementById("passwordbtn");
const resultlbl=document.getElementById("resultlbl");

passwordbtn.onclick =function(){
    const  lowercharater=true;
    const uppercharacter=true;
    const  specialcharacter=true;
    const   number=true;
    const length=12;

    const lower="abcdefghijklmnopqrstuvwxyz";
    const upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ";  
    const specail="!@#$%^&*()_=";
    const numbers="1234567890";

    let characterat="";
    let password="";

    if(lowercharater==true){
        characterat+=lower;
    }else{
        characterat+="";
    }

    if(uppercharacter==true){
        characterat+=upper;
    }else{
        characterat+="";
    }

    if(specialcharacter==true){
        characterat+=specail;
    }else{
        characterat+="";
    }

    if(number==true){
        characterat+=numbers;
    }else{
        characterat+="";
    }
    


    if( length<8){
        resultlbl.textContent=(`please enter at lest 8 letter`);
    }else{
        for(i=1;i<=length;i++){
            let random=Math.floor(Math.random()*characterat.length);
            password+=characterat[random];
        }
        resultlbl.textContent=`Password : ${password}`;
    }

}