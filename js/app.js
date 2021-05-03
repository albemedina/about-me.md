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

alert ('Thanks for the quick chat enjoy the red bull ' + username );

console.log (typeof (questionSix));
let questionSixAnswer = 4;

for (let i = 0; i < 4; i++){
  let questionSix = parseInt( prompt(`${username} Can you guess what my favorite number is? Please enter a whole number between 1 to 10.`));
  if (questionSix === 4){
    alert ('congrats you guessed my favorite number have another red bull'+ username);
    break;
  } else if (questionSix < 4){
    alert ('The answer is too low');
  }
}


 let questionSeven = 20;
let attemptsAllowed= 7;

let faveNum= prompt('please enter a numerical whole number between 1 and 25');

console.log (typeof (faveNum));
// while(attemptsAllowed){

// }

for(let i = 0; i <attemptsAllowed; i++){
  alert ('almost there');
}
