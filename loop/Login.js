let login=false;
let username;
let password;
while(!login){
    username=window.prompt("Enter username : ");
    password=window.prompt("Enter password : ");
    if(username=="rajan" && password=="123456"){
        console.log("Login sucessfully");
        login=true;
    }else{
        console.log("Please enter correct username and passsword");
    }
}
