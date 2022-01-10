console.log("Welcome the Rock, Paper, Scissors game!")
let words = ['Rock', 'Paper', 'Scissors'];
let a=0;
let b=0;

function computerPlay(words){
    return words[Math.floor(Math.random() * words.length)];
}


function winnerPlay(playerSelection, computerSelection){

    if (playerSelection == computerSelection) {
    } else if ((playerSelection==btn1.textContent)&&(computerSelection==btn2.textContent)) {
        b=b+1;
    } else if ((playerSelection==btn1.textContent)&&(computerSelection==btn3.textContent)) {
        a=a+1;
    } else if ((playerSelection==btn2.textContent)&&(computerSelection==btn1.textContent)) {
        a=a+1;
    } else if ((playerSelection==btn2.textContent)&&(computerSelection==btn3.textContent)) {
        b=b+1;
    } else if ((playerSelection==btn3.textContent)&&(computerSelection==btn2.textContent)) {
        a=a+1;
    } else if ((playerSelection==btn3.textContent)&&(computerSelection==btn1.textContent)) {        
        b=b+1;
    } else {
    }                 
}

function game (){      

    const computerSelection = computerPlay(words);
    winnerPlay(playerSelection, computerSelection);

        if (a>b) {
            console.log('You Win!','You:',a,'Computer:',b); 
        } else if (b>a) {
            console.log('You Lost!','You:',a,'Computer:',b);
        } else {
            console.log('Something Drawn!','You:',a,'Computer:',b);
        }

        if (a==5) {
            gameoverYouwon();
            a=0;
            b=0;
            console.log('Round Restart!')
            setTimeout(function(){
                window.location.reload(1);
             }, 5000);
        } else if (b==5) {
            gameoverComputerwon();
            a=0;
            b=0;
            console.log('Round Restart!')
            setTimeout(function(){
                window.location.reload(1);
             }, 5000);
        } else {
            console.log('Round over!')
        }
}


const btn1 = document.querySelector('#btn1');
btn1.addEventListener('click', () => {
    playerSelection = btn1.textContent;
   return game();
});

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    playerSelection = btn2.textContent;
   return game();
});

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', () => {
    playerSelection = btn3.textContent;
    return game();
});


function gameoverYouwon() {
    const container = document.querySelector('#container');
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'Game over You won!';
    container.appendChild(content);
}

function gameoverComputerwon() {

    const content2 = document.createElement('div');
    content2.classList.add('content');
    content2.textContent = 'Game over Computer won!';
    container.appendChild(content2);
}


