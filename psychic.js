let computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", 
    "u","v", "w", "x", "y", "z"]

    let computerGuess = [];
    let userGuess = [];
    let wins = 0;
    let losses = 0;
    let guessesLeft = 10;

    function countGuessesLeft() {
	    document.querySelector("#guessesLeft").innerHTML = guessesLeft;
}

    function farUserGuesses() {
	    document.querySelector("#letter").innerHTML = letterUser.join(' ');
}

function computerGuess(){
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

function guessesLeft(){
    guessesLeft--;
}
    

document.onkeyup = function(event){
    computerGuess()
    
var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	letterUser.push(userGuess);
	countGuessesLeft();
	farUserGuesses();

	if (userGuess === computerGuess){
		wins++;
		document.querySelector("#wins").innerHTML = "Wins: " + wins;
		restart();
	} 
	else if (guessesLeft === 0) {
		losses++;
		document.querySelector("#lose").innerHTML = "Loses: " + losses;
		restart();
	}
  };





document.getElementById("wins")







 
 
    </script>