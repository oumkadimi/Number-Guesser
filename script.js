let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
// Write your code below:
//  3
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}

//  4 
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const humanDifference = Math.abs(targetGuess - humanGuess);
  const computerDifference = Math.abs(targetGuess - computerGuess); 
  return humanDifference <= computerDifference;
}
// 5 
const updateScore = winner => {
  if (winner === 'human') {
     humanScore += 1;
  } else if (winner === 'computer') {
     computerScore += 1;
  }
} 
const advancedRound = () => 
  currentRoundNumber += 1;

updateScore ('human');
console.log(humanScore);

updateScore ('computer');
console.log(computerScore);


