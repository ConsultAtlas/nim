//Nim the Game

//DEFINE THE STATE
// - Number of dots
// - Who's turn it is
// - How many players
// - 
var numberOfDots = 16;
var isPlayerOnesTurn = true;


//ACTIONS (These are functions that mess with the state)
// - print a bunch of dots
// - remove dots
// - change who's turn it is
// - print the board
// - check for a winner

function printBoard() {
// should numberOfDors *'s to the screen

	var star = "*";
	var numDotsToPrint = Math.max(numberOfDots, 0);
	console.log(star.repeat(numDotsToPrint));

}

function gameIsInProgress() {
	//if the number of dots is more than ), then the game is still in progress.
	var inProgress = true;

	if (numberOfDots > 0) {
		return true;

	} else {
		return false;
	}

	return inProgress;
}

function promptUserForDots() {
	//get get input from a user by doing var input = prompt()
	//we can turn strings into integers by using the parseint() function
	//we will need to validate that the user enters a number 
	//and that number needs to be 1, 2 or 3.
	//Keep asking for input until they finally enter a number
	var userInput = parseInt(prompt("enter a number between 1 and 3"));

	while ( userInput != 1 && userInput != 2 && userInput !=3 ) { // we should only enter the loop if the user did not enter a valid number
		userInput = parseInt(prompt("enter a number between 1 and 3"));
	}

	return userInput;

}

function removeDots(dotsToRemove) {
	// Need to remove dotsToRemove from the number of dots
	numberOfDots -= dotsToRemove;

}

function switchPlayers() {
	isPlayerOnesTurn = !isPlayerOnesTurn;
}

// Kicking Everything Off
// X Show the board right away
// X Prompt the user for how many dots they want to remove
// - Actualy remove the dots
// - Print th new results
// - Switich players players
// - check to see if they won
// - keep looping ^^^ until someone wins



printBoard();

while ( gameIsInProgress () ) { //checkForWinner needs to return true if the game is still in progress,
	// false if someone has won.
	switchPlayers();
	var dotsToRemove = promptUserForDots();
	removeDots(dotsToRemove);
	printBoard();
	
	
}


// We need to alert either "player 1 wins" or "p;ayer 2 wins"

if (isPlayerOnesTurn) {
	alert("Game over! player 1 wins!")
} else {
	alert("Game over! player 2 wins!")
}

