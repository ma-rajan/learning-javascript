const container=document.getElementById("container");
container.style.border="2px solid black";
container.style.width="400px";
container.style.height="400px";
container.style.textAlign="center";
container.style.boxShadow="2px 2px 2px 2px brown";
container.style.backgroundColor="hsl(78, 44%, 51%)";
container.style.color="white";
container.style.borderRadius = "5px";
container.style.marginLeft="250px";
container.style.marginTop="90px";
const wholebody=document.getElementsByTagName("body")[0];
wholebody.style.backgroundColor="hsl(25, 9%, 47%)";


const add=document.getElementById("add");
add.style.marginRight="20px";
add.style.width="100px"
add.style.height="30px"
add.style.backgroundColor="hsl(25, 26%, 48%)";
add.style.color="white";


const remove=document.getElementById("remove");
remove.style.marginLeft="20px"
remove.style.height="30px"
remove.style.width="100px"
remove.style.backgroundColor="hsl(25, 26%, 48%)";
remove.style.color="white";

const goal=document.getElementById("goal");
goal.style.width="250px";
goal.style.height="30px"
goal.style.fontSize="20px";
goal.style.color="white";
goal.style.backgroundColor="hsl(25, 26%, 48%)"

const result=document.getElementById("result");
result.style.fontSize="16px";
result.style.fontWeight="bold";
let i=1;
function addfun(){
    if(goal.value===""){
        result.textContent="Please Enter Any goal";
        return;
    }
    let st = goal.value;
    result.innerHTML += `${i++}. ${st}<br>`;
    goal.value = "";
}
function removefun(){
    result.innerHTML="";
}
