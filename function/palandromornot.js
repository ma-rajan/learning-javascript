function check(st,l,rev,orginal){
    if(l<0){
        if(orginal===rev){
            return 1;
        }else{
            return 0;
        }
    }else{
        rev=rev+st.charAt(l);
        return check(st,l-1,rev,orginal);
    }   
}
const st="racecar";
const orginal=st;
let l=st.length-1;
const rev=""
let c;
c=check(st,l,rev,orginal);

if(c==1){
    console.log("It is a palindrom");
}
if(c==0){
    console.log("It is not palandrom");
}