const display=document.getElementById("display");
function displaycontent(data){
    display.value+=data;
}
function clearContent(){
    display.value="";
}
function calculate(){
    try{
    display.value=eval(display.value);
    }
    catch(error)
    {
        display.value(error);
    }
}