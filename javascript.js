let buttons = document.querySelectorAll('button.item');

let result = document.querySelector('h3')

function main(){
    let robotScore = 0;
    let playerScore = 0;
    
    for (var i=1; i<6; i++){
        let computer = getComputerChoice();
        result.textContent = 'Get player choice'
        let player = getPlayerChoice();
        

        if (player == computer){
            player = getPlayerChoice();
            computer = getComputerChoice();
            result.textContent = 'Tie! Try Again!!'
        }
        // starts the round with the player and computer selections
        let round = playRound(player, computer);
        // logs a message after every round to update player
    
        // how winner is calculated
        if (round == 'player'){
            playerScore++
            result.textContent = 'player won round'
        }
        else{
            robotScore++
            result.textContent = 'Robot won this round'
        }
}

    if(playerScore > robotScore){
        result.textContent = 'Player won game'
    }
    else{
        result.textContent = 'Tobot won game'
    }
}



function playRound(player, computer){
    if (player == 2 && computer == 0){
        //alert('you won round')
        return 'player'
    }
    else if (player == 0 && computer == 2){
        //alert('you won round')
        return 'player'
    }
    else if (player == 2 && computer == 1){
        //alert('you won round')
        return 'player'
    }
    else if (computer == 1 && player == 0){
        //alert('you lost round')
        return 'computer'
    }
    else if (computer == 0 && player == 2){
        //alert('you lost round')
        return 'computer'
    }
    else if (computer == 2 && player == 1){
        //alert('you lost round')
        return 'computer'
    }    
     
}

// returns a lowercase option from user
function getPlayerChoice(){
    let playerchoice;
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            let player = button.textContent.toLowerCase()
            
            switch (player){
                case 'rock':
                    playerchoice = 0;
                    break;
                case 'paper':
                    playerchoice = 1;
                    break;
                case 'scissors':
                    playerchoice = 2;
                    break;
            }    
        })
        
    })
    return playerchoice
}

function getComputerChoice(){
// picks a value for computer based on 
// a random number 1-3
// 0-rock, 1-paper, 2-scissors
    let num = Math.ceil(Math.random() * 3)
    switch (num){
        case 1:
            return 0;
        case 2:
            return 1;
        case 3:
            return 2; 
    }
}

main()

/*function main(){
    let roboScore = 0;
    let playerScore = 0;

    for (var i=1; i<6; i++){
        let ComputerSelection = getComputerChoice();
        let playerSelection = getPlayerChoice();

        if (ComputerSelection == playerSelection){
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

*/

