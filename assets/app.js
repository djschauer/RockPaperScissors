// Creates an array that lists out all of the options (Rock, Paper, or Scissors).
    var computerChoices = ["r", "p", "s"];

    // This function is run whenever the user presses a key.

    document.onkeyup = function(event) {

      // Determines which key was pressed.
      var userGuess = event.key;

      // Randomly chooses a choice from the options array. This is the Computer's guess.
      var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

      // Alerts the key the user pressed (userGuess).
      alert("User guess: " + userGuess);

      // Alerts the Computer's guess.
      alert("Computer guess: " + computerGuess);

if (userGuess === computerGuess) {
  alert("Draw")
}


if (userGuess === "p"){
if (computerGuess === "r") {
  alert("Win")
}
else {
  alert("Loss")
}
}

if (userGuess === "s") {
  if (computerGuess === "p") {
  alert("Win")
}
else {
  alert("Loss")
}
}

if (userGuess === "r") {
  if (computerGuess === "s") {
  alert("Win")
}
else {
  alert("Loss")
}
}


};