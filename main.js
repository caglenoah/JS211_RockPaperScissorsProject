// uses strict mode so strings are not coerced, variables are not hoisted, etc... 
'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// the function that will be called by the unit test below
const rockPaperScissors = (hand1, hand2) => {

  let handOne = hand1.toLowerCase().trim();
  let handTwo = hand2.toLowerCase().trim();

  if (handOne == handTwo) {
    return "It's a tie!"
  }
  // if handOne is 'rock', and handTwo is 'rock, it is a tie
  // if handOne is 'paper', and handTwo is 'paper', it is a tie
  // if handOne is 'scissors, and handTwo is 'scissors', it is a tie
  else if (handOne == 'rock') {
    if (handTwo == 'paper') {
      //paper wins
      return "Hand Two Wins!"
    }
    else {
  //scissors
      return "handOne wins!"
         }
  }
  else if (handOne == 'paper') {
    if (handTwo == 'rock') {
      return "Hand One Wins!"
    }
    //scissors
    else {
      return "Hand Two Wins!"
    }

  }
  else if (handOne == 'scissors') {
    if (handTwo == 'rock')
  return "Hand Two Wins!"
 }
  else {
    return "Hand One Wins!"
}
}
  // if handOne is 'rock', and handTwo is 'scissors', handOne wins
  // if handOne is 'rock', and handTwo is 'paper', handTwo wins
  // if handOne is 'scissors', and handTwo is 'rock', handTwo wins
  // if handOne is 'scissors', and handTwo is 'paper', handOne wins
  // if handOne is 'paper', and handTwo is 'rock', handOne wins
  // if handOne is 'paper, and handTwo is 'scissors', handTwo wins

  
  // Write code here
  // Use the unit test to see what is expected



// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
function getPrompt() {
  rl.question('hand1: ', (answer1) => {
    rl.question('hand2: ', (answer2) => {
      console.log( rockPaperScissors(answer1, answer2) );
      getPrompt();
    });
  });
}

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  // most are notes for human eyes to read, but essentially passes in inputs then compares if the function you built returns the expected output.
  describe('#rockPaperScissors()', () => {
    it('should detect a tie', () => {
      assert.equal(rockPaperScissors('rock', 'rock'), "It's a tie!");
      assert.equal(rockPaperScissors('paper', 'paper'), "It's a tie!");
      assert.equal(rockPaperScissors('scissors', 'scissors'), "It's a tie!");
    });
    it('should detect which hand won', () => {
      assert.equal(rockPaperScissors('rock', 'paper'), "Hand two wins!");
      assert.equal(rockPaperScissors('paper', 'scissors'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock', 'scissors'), "Hand one wins!");
    });
    it('should scrub input to ensure lowercase with "trim"ed whitepace', () => {
      assert.equal(rockPaperScissors('rOcK', ' paper '), "Hand two wins!");
      assert.equal(rockPaperScissors('Paper', 'SCISSORS'), "Hand two wins!");
      assert.equal(rockPaperScissors('rock ', 'sCiSsOrs'), "Hand one wins!");
    });
  });
} else {

  // always returns ask the user for another input
  getPrompt();

}
