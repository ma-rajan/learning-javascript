function vowelcount(st,l,c){
    if(l<0){
        return c;
    }else{
        let ch=st.charAt(l);
        if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u'){
            return vowelcount(st,l-1,c+1);
        }else{
            return vowelcount(st,l-1,c);
        }
    }

}
const st="Banana".toLowerCase();
let c=0;
let l=st.length-1;
console.log("Total vowel letter are : "+vowelcount(st,l,c));