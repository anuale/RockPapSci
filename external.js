console.log("Welcome the Rock, Paper, Scissors game!")
let words = ['Rock', 'Paper', 'Scissors'];

function computerPlay(words){
    return words[Math.floor(Math.random() * words.length)];
}

function capitalize(words) {
    return words[0].toUpperCase() + words.slice(1).toLowerCase();
}

let a=0;
let b=0;

for (i=1; i<6; i++) {
let selection = prompt("Which one will you choose, please write down.");
playerSelection = capitalize(selection);

    function winnerPlay(playerSelection, computerSelection){
        if (playerSelection == computerSelection) {
        } else if ((playerSelection=='Rock')&&(computerSelection=='Paper')) {
             b=b+1;
        } else if ((playerSelection=='Rock')&&(computerSelection=='Scissors')) {
             a=a+1;
        } else if ((playerSelection=='Paper')&&(computerSelection=='Rock')) {
             a=a+1;
        } else if ((playerSelection=='Paper')&&(computerSelection=='Scissors')) {
             b=b+1;
        } else if ((playerSelection=='Scissors')&&(computerSelection=='Paper')) {
             a=a+1;
        } else if ((playerSelection=='Scissors')&&(computerSelection=='Rock')) {        
             b=b+1;
        } else {
        }                 
    }
    const computerSelection = computerPlay(words);
   winnerPlay(playerSelection, computerSelection);
 
}

if (a>b) {
    console.log('You Win!','You:',a,'Computer:',b);
    
} else if (b>a) {
    console.log('You Lost!','You:',a,'Computer:',b);
} else {
    console.log('Something Drawn!','You:',a,'Computer:',b);
}

