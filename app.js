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

var sportsBall = prompt('Am I a big sports fan?');
var sportsCase sportsBall.toUpperCase();
if (sportsCase === 'Y') {
  alert('Sorry, I really don\'t qualify as a sports nut.');
  console.log('The user answered yes.');
}
else if (sportsCase === 'N') {
  alert('Correct! I enjoy sports but they\'re not hugely important to me.');
  console.log('The user guessed no.');
} else {
  alert('You really do need to enter just y or n for these questions.');
}

var haveSiblings = prompt('Do I have any siblngs?');
var siblingCase = haveSiblings.toUpperCase();
if (siblingCase === 'Y') {
  alert('Correct! I have a sister.');
  console.log('The user guessed yes.');
}
else if (siblingCase === 'N') {
  alert('Incorrect.');
  console.log('The user guessed no.');
} else {
  alert('please use Y or N.');
  console.log('The user entered invalid characters.');
}

var likeOutside = prompt('Do I like outdoor activities?');
var outsideCase = likeOutside.toUpperCase();
if (outsideCase === 'Y') {
  alert('Absolutely!');
  console.log('The user guessed yes.');
}
else if (outsideCase === 'N') {
  alert('Incorrect! I love the outdoors.');
  console.log('The user guessed no.');
} else {
  alert('Please use Y or N.');
  console.log('The user entered invalid characters.');
}
var likeCooking = prompt('Do I like to cook?');
var cookingCase = likeCooking.toUpperCase();
if (cookingCase === 'Y') {
  alert('Correct!');
  console.log('The user guessed yes.');
}
else if (cookingCase === 'N') {
  alert('Wrong! I like to cook, especially with other people.');
  console.log('The user guessed no.');
} else {
  alert('please use Y or N.');
  console.log('The user entered invalid characters.');
}
