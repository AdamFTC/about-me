/*ask questions, store answers as variables, reply to questions with recognition if they answered correctly */
var userName = prompt('Hello, what is your name?');
console.log('The user\'s name is ' + userName + '.');
alert('Nice to meet you, ' + userName + '.');

alert('I\'m going to ask you a few questions and I would appreciate answers in Y/N format!');

var originCity = prompt('Was I born in Seattle?');
var originCap = originCity.toUpperCase();
if (originCap === 'Y') {
  alert('Correct! I was born in Seattle.');
  console.log('The user guessed yes.');
}
else if (originCap === 'N') {
  alert('Incorrect!');
  console.log('The user guessed no.');
} else {
  alert('Please answer with a Y or N.');
  console.log('The user entered invalid characters.');
}

var likeCoffee = prompt('Am I a coffee drinker?');
var coffeeCase = likeCoffee.toUpperCase();
if (coffeeCase === 'Y') {
  alert('Hell yeah, I love my coffee!');
  console.log('The user guessed yes.');
}
else if (coffeeCase === 'N') {
  alert('Wrong! I\'d have a hard time without coffee.');
  console.log('The user guessed no.');
} else {
  alert('Please answer with a Y or N.');
  console.log('The user entered invalid characters.');
}
