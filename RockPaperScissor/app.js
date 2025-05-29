

let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg");
const userScoreGet = document.querySelector("#userScore");
const compScoreGet = document.querySelector("#compScore");



const geneCompChoice=()=>{
    //rock,paper,scissor
    const options=['rock','paper','scissors'];
    const index=Math.floor(Math.random()*3);
    return options[index];
}

const drawGame = ()=>{
    console.log("game was Draw");
    msg.innerText="Game was Draw.Try Again!!";
    msg.style.backgroundColor="#0d0434";
}

const showWinner=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScoreGet.innerText=userScore;
        console.log("You Win!");
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compScoreGet.innerText=compScore;
        console.log("You lose");
        msg.innerText=`You Lost. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{//to generate computer choice
    console.log("User Choice = ", userChoice)
    //generate computer choice
    const compChoice=geneCompChoice()
    console.log("Comp Choice = ", compChoice)

    //check who win
    if(userChoice===compChoice){
        //draw game
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice === "rock"){
            userWin=compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userWin=compChoice === "scissor" ? false : true;
        }
        else if(userChoice === "scissor"){
            userWin=compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

}

choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        const userChoice=choice.getAttribute("Id");//get user choice
        playGame(userChoice)
    })
})