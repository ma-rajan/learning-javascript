//To calculate score in game
function Scorecard(){
    let score=0;
    function scoreincrease(point){
        score+=point;
        console.log(`+${score} point`);
    }
    function scoredecrease(point){
        score+=point;
        console.log(`-${score} point`);
    }
    function finalscore(){
        return score;
    }
    return {scoreincrease,scoredecrease,finalscore};
}
const s_card=Scorecard();
s_card.scoreincrease(5);
s_card.scoreincrease(15);
s_card.scoreincrease(5);
s_card.scoreincrease(3);

s_card.scoredecrease(2);
s_card.scoredecrease(4);


console.log(`Final score is : ${s_card.finalscore()}`);
