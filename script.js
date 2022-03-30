var win = 0;
var loss = 0;
var draw = 0;

PlayerChoice = window.prompt("Please choose Rock, Paper, or Scissors: ").toLowerCase();

var AIChoice = ["rock", "paper", "scissors"];
var randomnum = Math.trunc(Math.random() * 3);

var gamestate = function(a, b){

    if(a === b){
        draw++;
        window.alert("Draw.");
    }
    else if(a === "rock" && b === "paper"){
        win++;
        window.alert("Computer chose rock. You Win!");
    }
    else if(a === "rock" && b === "scissors"){
        loss++;
        window.alert("Computer chose rock. Lose.");
    } 
    else if(a === "paper" && b === "rock"){
        loss++;
        window.alert("Computer chose paper. Lose.");
    } 
    else if(a === "paper" && b === "scissors"){
        win++;
        window.alert("Computer chose paper. Win!");
    } 
    else if(a === "scissors" && b === "rock"){
        win++;
        window.alert("Computer chose scissors. Win!");
    } 
    else if(a === "scissors" && b === "paper"){
        loss++;
        window.alert("Computer chose scissors. Lose.");
    };

    window.alert("Stats \n Win: " + win + "\n Losses: " + loss + "\n Draws: " + draw);

    if(window.confirm("Would You Like to Play Again?"))
    {
        PlayerChoice = window.prompt("Please choose Rock, Paper, or Scissors: ");

        randomnum = Math.trunc(Math.random() * 3);

        gamestate(AIChoice[randomnum], PlayerChoice);
    }
}

gamestate(AIChoice[randomnum], PlayerChoice);