'use strict';

let username = prompt('Hey can I ask for your name ?');

alert('Wanna talk for just a second ' + username + ' ? Answer yes or no y/n');

let questionOne = prompt('Do you like Grey/s Anatomy? Type yes or no').toLowerCase();
// console.log(questionOne)
if (questionOne === 'no' || questionOne === 'n') {

  alert('me either I dont watch it');

}
else if (questionOne === 'yes' || questionOne === 'y') {
  alert('I still dont watch it');
}


let questionTwo = prompt('Do you live in washington state').toLowerCase();

// console.log(questionTwo)
if (questionTwo === 'no' || questionOne === 'n') {

  alert('If only I could leave');
}


else if (questionTwo === 'yes' || questionTwo === 'y') {

  alert('Me too!');
}

let questionThree = prompt('Have you ever been in the service').toLowerCase();
// console.log(questionThree)
if (questionThree === 'no' || questionThree === 'n') {

  alert('Thank you for your support');
}

else if (questionThree === 'yes' || questionThree === 'y') {
  alert('Soon to be veteran over here');
}


let questionFour = prompt('Do you have a dream job').toLowerCase();
// console.log(questionFour)
if (questionFour === 'no' || questionFour === 'n') {

  alert('You better go find it');
}

else if (questionFour === 'yes' || questionFour === 'y') {

  alert('I have a dream job to!');
}

let questionFive = prompt('Did you enjoy this conversation').toLowerCase();
// console.log(questionFive)
if (questionFive === 'no' || questionFive === 'n') {

  alert('Oh well you win some you lose some');
}

else if (questionFive === 'yes' || questionFive === 'y') {

  alert('Have a great day with your redbull!');
}

alert('Thanks for the quick chat enjoy the red bull ' + username);

//function: key word 
//q6 is the function
// paranthesis would be arguments/ or hold parameters
//let is the variable 
//userGuess is the name
//parseInt converst the string number to a number
//break stops the for loop when the answer is correct
function q6() {
  const realSeattlAreaCode = 206;
  for (let i = 0; i < 6; i++) {
    let userGuess = parseInt(prompt('what is the area code for seattle washington?'));
    if (userGuess === realSeattlAreaCode) {
      alert('Yes! are you a local seattlite');
      break;
    }
    else if (userGuess < realSeattlAreaCode) {
      alert('Wrong are you from florida or something? the actual answer is higher');
    }
    else {
      alert('Wrong just go ahead and google it at this point. Answer is lower');
    }
  }
}
q6();

// let questionSeven = prompt('What kind of Honda model car do I drive? Look how many models there are and guess lol').toLowerCase(); 20;{}
// let attemptsAllowed= 7;
// let questionSevenAnswer= 'Civic'
// if
// }
function q7() {

  let userGuessCorrectly = false;
  let modelName = ['civic', 'crv', 'accord', 'pilot', 'altima', 'focus', 'nsx'];

  for (let i = 0; i < 7; i++) {
    let questionSeven = prompt('what kind of honda do i drive? Only 7 chances to try!').toLowerCase();
    for (let j = 0; j < modelName.length; j++) {
      if (questionSeven === modelName[j]) {
        userGuessCorrectly = true;
        break;
      }
    }
    if (userGuessCorrectly) {
      alert('thats the car that I drive!');
      break;
    }
  }
}
q7();
//106 allowing you the amount of tries you can get
//gets users to guess
//108-113 sees if user puts in the correct
//110 if user puts in correct answer it will equal to true
// 114-117 React to what users guesses correctly
