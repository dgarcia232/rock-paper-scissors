function main(){
    let roboScore = 0;
    let playerScore = 0;

    for (var i=1; i<6; i++){
        let ComputerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice();

        if (ComputerSelection == playerSelection){
            alert("tie, try again")
            ComputerSelection = getComputerChoice();
            playerSelection = getPlayerChoice();
        }

        // starts the round with the player and computer selections
        let round = playRound(playerSelection, ComputerSelection)

        // logs a message after every round to update player
        

        // how winner is calculated
        if (round == 'player'){
            playerScore++
        }
        else{
            roboScore++
        }
    }

    if (playerScore > roboScore){
        alert('You Won game')
    }
    else{
        alert('U lost game')
    }

}

// picks a value for computer based on 
// a random number 1-3
// 1-rock, 2-paper, 3-scissors
function getComputerChoice(){
    let num = Math.ceil(Math.random() * 3)
    switch (num){
        case 1:
            return 'rock';
        case 2:
            return 'paper';
        case 3:
            return 'scissors'; 
    }
}

// returns a lowercase option from user
function getPlayerChoice(){
    let player = prompt('Enter your selection: ');
       

    return player.toLowerCase()
}

// handles all the rules and logic of game 
// besides ties, handled in 'main' function, see above
function playRound(playerSelection, ComputerSelection){
    if (playerSelection == 'paper' && ComputerSelection == 'rock'){
        alert('you won round')
        return 'player'
    }
    else if (playerSelection == 'rock' && ComputerSelection == 'scissors'){
        alert('you won round')
        return 'player'
    }
    else if (playerSelection == 'scissors' && ComputerSelection == 'paper'){
        alert('you won round')
        return 'player'
    }
    else if (ComputerSelection == 'paper' && playerSelection == 'rock'){
        alert('you lost round')
        return 'computer'
    }
    else if (ComputerSelection == 'rock' && playerSelection == 'scissors'){
        alert('you lost round')
        return 'computer'
    }
    else if (ComputerSelection == 'scissors' && playerSelection == 'paper'){
        alert('you lost round')
        return 'computer'
    }    
     
}

main()