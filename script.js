//Global Variables
let roundCount = 1
let computerScore = 0
let userScore = 0
let userInput = 0

//Function that returns a random number between 0-9
const getComputerGuess = () => {
	let computerGuess = Math.floor(Math.random() * 10)
	return computerGuess
}
//Function that compares the users input with the computers random guess
const getWinner = () => {
	//local variable that stores the return value of the getComputerGuess function
	let computerGuess = getComputerGuess()

	document.querySelector('#computer-guess').innerHTML = `${computerGuess}` //Displays computers guess

	if (userInput === computerGuess) {
		userScore++
		computerScore = 0
		return `You won!`
	} else {
		computerScore++
		return 'Sorry! Try again!'
	}
}

//Displays users current input: defalted to 0 at start of game
document.querySelector('#user-input').innerHTML = userInput

//Click event listener to increment user's input
document.querySelector('#plus').addEventListener('click', () => {
	if (userInput < 9) {
		userInput++
	}
	document.querySelector('#user-input').innerHTML = userInput //Displays user's input upon each incremet
})

//Click event listener to decrement user's input
document.querySelector('#minus').addEventListener('click', () => {
	if (userInput > 0) {
		userInput--
	}
	document.querySelector('#user-input').innerHTML = userInput //Displays user's input upon each decrement
})

//Click event listener to Make a Guess button to play the game
document.querySelector('#make-guess').addEventListener('click', () => {
	document.querySelector('#next-round').removeAttribute('disabled')
	document.querySelector('#make-guess').setAttribute('disabled', 'disabled') //disables button when clicked
	document.querySelector('#message').innerHTML = getWinner() //Calls getWinner function to play game and returns string in which is then dsplayed to the user
	document.querySelector('#computer-score').innerHTML =
		'Score: ' + computerScore //Displays computer score
	document.querySelector('#user-score').innerHTML = 'Score: ' + userScore //Displays user score
	roundCount++ //Increments the Round
})

document.querySelector('#next-round').addEventListener('click', () => {
	document.querySelector('#round-count').innerHTML = 'Round ' + roundCount
	document.querySelector('#next-round').setAttribute('disabled', 'disabled')
	document.querySelector('#make-guess').removeAttribute('disabled') //enables the Make a Guess button
	document.querySelector('#computer-guess').innerHTML = '?'
	userInput = 0
	document.querySelector('#user-input').innerHTML = userInput
})
