const resultlbl=document.getElementById("resultlbl");

function passwordgen(length,uppercasechar,
    lowercasechar,numbers,specialchar){
        let loweralphabet="abcdefghijklmnopqrstuvwxyz";
        let upperalphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        let number="123456789";
        let spcialchar="!@#$%^&*()_=";
        let characterat="";
        let password="";
      //  characterat+=uppercasechar?upperalphabet:"";
            //OR  

      if(uppercasechar==true){
            characterat+=upperalphabet;
        }else{
            characterat+="";
        }

        characterat+=lowercasechar?loweralphabet:"";
        characterat+=numbers?number:"";
        characterat+=specialchar?spcialchar:"";
        if(characterat.length === 0){
        return "Select at least one character type";
        }
      
        for(let i=1;i<=length;i++){
            const rand=Math.floor(Math.random()*characterat.length);
            password+=characterat[rand];
        }
        return password;
}
const passwordlength=12;
const uppercasechar=true;
const lowercasechar=true;
const numbers=true;
const specialchar=true;

let p=passwordgen(passwordlength,uppercasechar,lowercasechar,numbers,specialchar);
resultlbl.textContent=`Password : ${p}`;