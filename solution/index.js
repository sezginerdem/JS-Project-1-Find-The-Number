document.getElementById("btn").addEventListener("click", guessNum)

let num = randomInteger(0,100);
let counter = 0;

function guessNum() {
    let guess = document.getElementById("number").value;
    let message = document.getElementById('message');

    if (guess.length == 0) {
        message.innerText = "Please input a value";
    } else if (isNaN(guess)) {
        message.innerText = 'Enter a number, please!'
    } else if (guess < num) {
        message.innerText = 'Guess higher!'
        counter +=1;
        playSound()
    } else if (guess > num) {
        message.innerText = 'Guess lower!';
        counter +=1;
        playSound()
    } else {
        
        playSoundSuccess()
        counter +=1;
        alert(`Congrats! You guessed the number on the ${counter}. try.`)
        
        if (confirm('You wanna play again?')) {
            location.reload();
        } else {
            alert('Thanks for game! Bye Bye!')
            close()
        }
    }    

    document.getElementById("number").focus();
    
    document.getElementById('testNum').innerHTML = 'Test Number : ' + counter;

    document.getElementById('number').value = "";
}


//? functions 

function playSoundNo() {
    let sound = document.getElementById('error-1');
    sound.play();
}

function playSoundNoNoNo() {
    let sound = document.getElementById('error-2');
    sound.play();
}

function playSoundPat() {
    let sound = document.getElementById('error-3');
    sound.play();
}

function playSoundSuccess() {
    let sound = document.getElementById('success');
    sound.play();
}

function playSound() {
    if (counter % 5 == 0) {
        playSoundPat()
    } else if (counter % 3 == 0) {
        playSoundNoNoNo()
    } else {
        playSoundNo()
    }
}

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//? press enter option 

document.querySelector('#number').addEventListener('keyup', function(event) {
    if (event.keyCode === 13) {
        guessNum()
    }
}) 