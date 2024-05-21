
// .md file -> Mark Down file 

# Project Related to DOM

## Project Link
[Click here!](https://stackblitz.com/edit/stackblitz-starters-uapcqn?file=package.json)

# Solution Code

## Project 1 : Background Color Changer 

```javascript

const buttons = document.querySelectorAll('.button')

const body = document.querySelector('body')

// event
buttons.forEach(function (button){
  button.addEventListener('click', function(e){
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
  })
})

```

## Project 2 : BMI Generator 

```javascript

  const form = document.querySelector('form');

// this usecase will give you empty value
// const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit', function (e) {
  e.preventDefault(); // form load hone ke bad values sidha sever per bhejta hai usko prevent karne ke liye ye use kiya hai...

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#result');
  const guide = document.querySelector('#guide');

  if (height === '' || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const output = (weight / ((height * height) / 10000)).toFixed(2);
    // show the result
    result.innerHTML = `<span>${output}</span>`;

    if (output < 18.6) {
      guide.innerHTML = `Under Weight`;
    } else if (output >= 18.6 && output < 24.9) {
      guide.innerHTML = `Normal Range`;
    } else {
      guide.innerHTML = `Overweight`;
    }
  }
});

```

## Project 3 : Digital Clock 

```javascript

const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  clock.textContent = date.toLocaleTimeString();
  // clock.innerHTML = date.toLocaleTimeString();
}, 1000);

```

## Project 4 : Guess the Number 

```javascript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remainingGuesses = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

let previousGuesses = [];
let numberOfGuesses = 1;

const p = document.createElement('p');

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guessValue = parseInt(userInput.value);
    console.log(guessValue);
    validateGuess(guessValue);
  });
}

function validateGuess(guessValue) {
  if (isNaN(guessValue)) {
    alert('Please Enter a valid number');
  } else if (guessValue < 1) {
    alert('Please Enter a number more than 1');
  } else if (guessValue > 100) {
    alert('Please Enter a number less than 100');
  } else {
    previousGuesses.push(guessValue);

    if (numberOfGuesses === 11) {
      displayGuess(guessValue);
      displayMessage(`Game Over. Random number was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guessValue);
      checkGuess(guessValue);
    }
  }
}

function checkGuess(guessValue) {
  if (guessValue === randomNumber) {
    displayMessage(`You gussed it right`);
    endGame();
  } else if (guessValue < randomNumber) {
    displayMessage(`Number is too Low`);
  } else if (guessValue > randomNumber) {
    displayMessage(`Number is too High`);
  }
}

function displayGuess(guessValue) {
  userInput.value = '';
  guessSlot.innerHTML += `${guessValue}   `;
  numberOfGuesses++;
  remainingGuesses.innerHTML = `${11 - numberOfGuesses}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  submit.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    previousGuesses = [];
    numberOfGuesses = 1;
    guessSlot.innerHTML = '';
    remainingGuesses.innerHTML = `${11 - numberOfGuesses}`;
    userInput.removeAttribute('disabled');
    submit.removeAttribute('disabled');
    startOver.removeChild(p);

    playGame = true;
  });
}
```

## Project 5 : Unlimited Background Color 

```javascript
function randomColor() {
  const hex = '0123456789ABCDEF';
  let colorCode = '#';
  for (let i = 0; i < 6; i++) {
    colorCode += hex[Math.floor(Math.random() * 16)];
  }
  console.log('hello');
  return colorCode;
}

let interval;

const startChangingColor = function () {
  if (!interval) {
    interval = setInterval(function () {
      document.body.style.backgroundColor = randomColor();
    }, 1000);
  }
};

const stopChangingColor = function () {
  clearInterval(interval);
  interval = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor);

document.querySelector('#stop').addEventListener('click', stopChangingColor);

```

## Project 6 : Keyboard Check 

```javascript

const insert = document.querySelector('#insert');

window.addEventListener('keydown', function (e) {
  insert.innerHTML = `<div class="color">
    <table>
  <tr>
    <th>Key</th>
    <th>KeyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'space' : e.key}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  </div>`;
});

```

## Project 7 : Scrolling Indicator 

```javascript
function updateScrollIndicator() {
  // Calculate the maximum scroll position
  const maxScroll = document.body.scrollHeight - window.innerHeight;

  // Get the current Scroll Position
  const currentScroll = window.pageYOffset;

  // Calculate the scroll percentage
  const scrollPercentage = (currentScroll / maxScroll) * 100;

  // Get the Progress bar element
  const progressBar = document.querySelector('.scroll-indicator .progress');

  // Update the width of the progress bar
  progressBar.style.width = scrollPercentage + '%';
}

// Event listener for scrolling
window.addEventListener('scroll', updateScrollIndicator);

// Event listener for resizing the window, in case the document height changes
window.addEventListener('resize', updateScrollIndicator);

```

## Project 8 : Auto Typer 

```javascript

const typedText = document.querySelector('.typed-text')

const cursor = document.querySelector('.cursor');

const words = ['Awesome','Funny','Love','Jhakaas','mast','Weird','pretty','wast'];

let wordIndex = 0;
let letterIndex = 0;
let increasing = true;

function type(){
  if(increasing){
    // Append the next letter in the 'words' array 
    if(letterIndex <= words[wordIndex].length){
      typedText.textContent = words[wordIndex].substring(0,letterIndex)
      letterIndex++;
      setTimeout(type,200); // Proceed typing the next letter 
    }else{
      // After the word is complete, wait for some time before starting 
      setTimeout(erase,1000);
    }
  }
}

function erase(){
  if(letterIndex > 0){
    // Remove one letter 
    typedText.textContent = words[wordIndex].substring(0,letterIndex-1);
    letterIndex--;
    setTimeout(erase,100); // continue erasing 
  }else{
    // After the word is erased completely, move to the next word 
    increasing = true;
    wordIndex++;
    if(wordIndex >= words.length){
      wordIndex = 0;  // start from the first word again 
    }
    setTimeout(type,200); // start typing the next word 
  }
}

function cursorAnimation(){
  cursor.classList.toggle('active');
}

setInterval(cursorAnimation,400); // Create a blinking cursor effect 

type();

```

## Project 9 : Mouse Cursor

```javascript

const cursor = document.querySelector('.cursor');

// an array of 10 colors in hex value
const colors = [
  '#FF6633',
  '#FFB399',
  '#FF33FF',
  '#FFFF99',
  '#00B3E6',
  '#E6B333',
  '#3366E6',
  '#999966',
  '#99FF99',
  '#B34D4D',
];

// Add circle to cursor and change it's color as cursor moves on the screen. Pick color from these array

window.addEventListener('mousemove', function (e) {
  // Move the cursor element to the mouse position
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';

  // Change the background color of the cursor
  const colorIndex = Math.floor(Math.random() * colors.length);
  cursor.style.backgroundColor = colors[colorIndex];
});

```

## Project 10 : Emogi Changer

```javascript

const anyId = document.querySelector('#emoji')

const emoji = [
  '😆',
  '😅',
  '🤣',
  '😂',
  '😀',
  '🤑',
  '🤨',
  '🙂',
  '😊',
  '😗',
  '😛',
  '😏',
  '🤥',
  '😴',
  '🥺',
  '😧',
  '😇',
  '😳',
  '🙃',
  '🥴',
  '🧐',
  '🤨',
  '😒',
  '🤔',
  '🤭',
  '🥰',
  '🤐',
  '👀',
  '🤔',
  '🤪',
  '🥲',
  '😃',
  '😁',
  '😬',
];

function move(){
  const hover = Math.floor(Math.random() * emoji.length)
  anyId.innerHTML = emoji[hover]
}

anyId.addEventListener('mousemove',move)

```

## Project 11 : Text Editor

```javascript

const inputField = document.querySelector('#input-field');
const outputField = document.querySelector('#output-field');

const btnUppercase = document.querySelector('.btn-uppercase');
const btnLowercase = document.querySelector('.btn-lowerclass');
const btnCapitalize = document.querySelector('.btn-capitalize');
const btnBold = document.querySelector('.btn-bold');
const btnItalic = document.querySelector('.btn-italic');
const btnUnderline = document.querySelector('.btn-underline');

btnUppercase.addEventListener('click', function () {
  outputField.textContent = inputField.value.toUpperCase();
});

btnLowercase.addEventListener('click', function () {
  outputField.textContent = inputField.value.toLowerCase();
});

btnCapitalize.addEventListener('click', function () {
  outputField.textContent = inputField.value
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
});

btnBold.addEventListener('click', function () {
  outputField.innerHTML = `<strong>${inputField.value}</strong>`;
});

btnItalic.addEventListener('click', function () {
  outputField.innerHTML = `<em>${inputField.value}</em>`;
});

btnUnderline.addEventListener('click', function () {
  outputField.innerHTML = `<span style="text-decoration:underline;">${inputField.value}</span>`;
});

```

## Project 12 : Random Images Generator

```javascript
const baseURL = 'https://source.unsplash.com/all/300x300';

// this url gives an image. Use this and NO API calls

const content = document.querySelector('.content');
const button = document.querySelector('button');
const para = document.querySelector('.para')

button.addEventListener('click', function () {
  const uniqueURL = baseURL + new Date().getTime();
  para.textContent = `${uniqueURL}`
  content.innerHTML = `<img src="${uniqueURL}" alt="error">`;
});

```

## Project 13 : Jokes Generate through API

```javascript
const url = 'https://api.chucknorris.io/jokes/random';

const getJoke = document.querySelector('#getJoke');
const displayJoke = document.querySelector('#display-joke');

// handle this end point with XMLHttpRequest

// getJoke.addEventListener("click", function(){
//   const xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function(){
//     if(xhr.readyState === XMLHttpRequest.DONE){
//       if(xhr.status === 200){
//         const data = JSON.parse(xhr.responseText);
//         const joke = data.value;
//         displayJoke.textContent = `${joke}`
//       }else{
//         displayJoke.textContent = xhr.statusText
//       }
//     }
//   }

//   xhr.open('GET',url);
//   xhr.send();
// })

// handle this end point with promises

getJoke.addEventListener('click', function () {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      var joke = data.value;
      displayJoke.textContent = `${joke}`;
    })
    .catch((error) => {
      displayJoke.textContent = `${error}`;
    });
});

// handle the case of race condition

```

## Project 14 : Random Cats through API

```javascript

const url = 'https://api.thecatapi.com/v1/images/search';

const btn = document.querySelector('.btn');
const container = document.querySelector('.container');

btn.addEventListener('click', function () {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      const imageURL = data[0].url;

      // first way 
      // container.innerHTML = `<img src="${imageURL}" alt="error">`

      // another way 
      const catImage = document.createElement('img');
      catImage.src = imageURL;
      catImage.alt = 'Random Cat';

      container.innerHTML = ''; // clear previous content in the container and append the new image
      container.appendChild(catImage);
    })
    .catch((error) => {
      console.log(`${error}`);
    });
});

```