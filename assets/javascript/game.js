//Create variables 
var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var userGuesses = [];
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//This function is running whenever the user presses the key.
document.onkeyup = function (event) {
    //This is taking in user guesses.
    var userGuess = String.fromCharCode(event.keyCode).
        toLowerCase();
        
    //Computer choose the random letter option fron an array.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    userGuesses.push(userGuess);

    //If the user guess matches the computer guess it logs a win.
    if ((userGuess === computerGuess) && (guessesRemaining > 0)) {
        wins++;
        alert("You are a Psychic!");
        guessesRemaining = 10;
        userGuesses.length = 0;
        reset();
    }
    else if (guessesRemaining == 0) {
        losses++;
        alert("You are not a Psychic! Try again!");
        guessesRemaining = 10;
        userGuesses.length = 0;
        reset();
    }
    else if ((userGuess !== computerGuess[0]) && (guessesRemaining > 0)) {
        guessesRemaining = guessesRemaining - 1;

        //decreasing the number of guesses left

    }
    // Display the user and computer guesses, and wins/losses.
    var html = "<h1>The Psychic Game</h1>" +
        "<p>Guess what letter I am thinking of</p>" +
        "<p>Wins: " + wins + "</p>" +
        "<p>Losses: " + losses + "</p>" +
        "<p>Guesses Remaining: " + guessesRemaining + "</p>" +
        "<p>Your Guesses so far: " + userGuesses + "</p>"

    document.querySelector("#game").innerHTML = html;
}











