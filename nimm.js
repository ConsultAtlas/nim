var dots = ["*","*","*","*","*","*","*","*","*","*","*","*","*","*","*","*"]

var isplayer1Turn = true;



function showDots() {
	console.log(dots);
	isplayer1Turn = !isplayer1Turn;
}

function userInput()	{
	//console.log(dots);

	var userChoice = prompt('How many stars do you want to remove? Give an integer between 1 and 3');

	if (userChoice == 1 ) {
		dots.pop();
	} else if (userChoice == 2 ){
		dots.pop();
		dots.pop();
	} else if (userChoice == 3 ){
		dots.pop();
		dots.pop();
		dots.pop();
	} else {
		alert('That is not a valid input!');
	}
	showDots();
	whoseTurn();

}

function someoneWon() {
	
	if (dots.length != 0) {
		return false
	} else {
		alert('You are the winner!')
		return true
	}
}

function whoseTurn() {
	if (isplayer1Turn) {
		console.log('It\'s player 1\'s turn');
	}
	if (!isplayer1Turn) {
		console.log('It\'s player 2\'s turn.');
	}
}
console.log('Here is how may dots we have:')
console.log(dots);
console.log('It\'s player 1\'s turn');

while ( !someoneWon() ) {
	userInput();
}


