function outer(){
    const m="Beautiful";
    function inner(){
        console.log(m);
    }
    inner();
}
const m="Girl";
console.log(outer());