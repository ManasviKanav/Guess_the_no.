let buttonA = document.querySelector('#buttonA');
let headingA = document.querySelector('#headingA');

buttonA.onclick = () => {
    const name = prompt("What is your name?");
    alert(`Hello ${name}, Nice to meet you!`);
    headingA.textContent = (`WELCOME ${name}`);
}


let randomNumber = Math.floor(Math.random() * 100 + 1);
//  Math.random will generate a random number and since it is *100, it will generate a number between 0 and 100.
//  Math.floor will round the numer o an integer

const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowHigh = document.querySelector('.lowHigh');


const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkGuess(){
    const userGuess = Number(guessField.value); //built-in Number() constructor, to make sure the value is a number.


    if (guessCount === 1){  //=== means strict equality
        guesses.textContent = 'Previous guesses: '
    } 
    guesses.textContent  += ` ${userGuess}` ; // (+=) adds a value to a variable.
    
    if (userGuess === randomNumber){
        lastResult.textContent = "Cogratulations, you got it right!";
        lastResult.style.backgroundColor = 'green';
        lowHigh.textContent = " "
        setGameOver();
    }

    else if(guessCount === 10){
        lastResult.textContent = "GAME OVER!";
        lowHigh.textContent = ""
        setGameOver();
    }

    else{
        lastResult.textContent = 'Wrong!';
        lastResult.style.backgroundColor = 'red';
        
        if(userGuess < randomNumber){
            lowHigh.textContent = 'Too low!'
        }
        else if(userGuess > randomNumber){
            lowHigh.textContent = 'Too high!'
        }
    }

    guessCount++;
    guessField.value = ' ';
    guessField.focus();
    }

    guessSubmit.addEventListener('click', checkGuess);
    // because we want to add the checkGuess() function on click of submit button

    function setGameOver(){
        guessField.disabled = true;
        guessSubmit.disabled = true;
        resetButton = document.createElement('button');
        resetButton.textContent = "Start new game";
        document.body.append(resetButton);
        resetButton.addEventListener('click', resetGame);
    }

    function resetGame(){
        guesscount = 1;

        const resetparas = document.querySelectorAll('.result p');
        for (const resetPara of resetparas){
            resetPara.textContent = ' ';
        }
        
        resetButton.parentNode.removeChild(resetButton);

        guessField.disabled = false;
        guessSubmit.disabled = false;
        guessField.value = ' ';
        guessField.focus();

        lastResult.style.backgroundColor = 'white';

        randomNumber = Math.floor(Math.random() * 100) + 1;
    }