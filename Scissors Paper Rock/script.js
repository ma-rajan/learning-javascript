const element=["rock","paper","scissor"];
const  player=document.getElementById("player"); 
const  computer=document.getElementById("computer");
const result=document.getElementById("result");



function game(choice){
    let random_num=Math.floor(Math.random()*3);
    let randompick=element[random_num];

    player.textContent=`Player choice : ${choice}`;
    computer.textContent=`Computer choice : ${randompick}`;

    if(choice===randompick){
        result.textContent="Game Tie";
    }else{
        switch(choice){
            case 'scissor':
                if(randompick==='paper'){
                       result.textContent="User Win";
                }else{
                    result.textContent="Computer win"
                }
                break;

             case 'paper':
                if(randompick==='rock'){
                       result.textContent="User Win";
                }else{
                    result.textContent="Computer win"
                }
                break;
        
                 case 'rock':
                if(randompick==='scissor'){
                       result.textContent="User Win";
                }else{
                    result.textContent="Computer win"
                }
                break;
        }
            }

        }
    


  
