const ANSWER_LENGTH = 5;
const ROUNDS = 6;
const letters = document.querySelectorAll(".scoreboard-letter");
const loadingDiv = document.querySelector(".info-bar");
let count = 0;
let holdOn = false;
let fiveLetterWord = [];
let wordOfTheDay = [];
let validWord = false;
let currentRow = [];

function nabWord() {
  fetch(`https://words.dev-apis.com/word-of-the-day`)
    .then((data) => data.json())
    .then((data) => {
      wordOfTheDay = data.word.toString().toUpperCase().split("");
      console.log(wordOfTheDay);
    })
    .catch(console.log);
}

function markInvalidWord(guess) {
  fetch("https://words.dev-apis.com/validate-word", {
    method: "POST",
    body: JSON.stringify({ word: guess }),
  })
    .then((data) => data.json())
    .then((data) => {
      return data.validWord;
    })
    .then((data) => validate(data))
    .catch(console.log);
}

function validate(word) {
  if (word) {
    console.log("the word is valid");
    for (let i = count - 5; i <= count - 1; i++) {
      currentRow.push(document.getElementById(`letter-${i}`));
    }
    console.log(currentRow);
    currentRow.forEach((rowItem) => {
      if (!wordOfTheDay.includes(rowItem.innerHTML)) {
        rowItem.classList.add("wrong");
      } else if (
        wordOfTheDay[currentRow.indexOf(rowItem)] === rowItem.innerHTML
      ) {
        rowItem.classList.add("correct");
      } else {
        rowItem.classList.add("close");
      }
    });
  } else {
    console.log("the word is invalid");
    currentRow.forEach((rowItem) => {
      rowItem.classList.add("invalid");
    });
    for (let i = count - 1; i >= count - 5; i--) {
      document.getElementById(`letter-${i}`).innerHTML = "";
    }
    count -= 5;
  }
}

function keypressed(event) {
  if (!holdOn) {
    if (event.key === "Backspace" && fiveLetterWord.length > 0) {
      document.getElementById(`letter-${count - 1}`).innerHTML = "";
      fiveLetterWord.pop();
      count--;
    } else if (/^[a-zA-Z]$/.test(event.key.toString())) {
      document.getElementById(`letter-${count}`).innerHTML =
        event.key.toUpperCase();
      fiveLetterWord.push(event.key.toString());
      count++;
    } else {
      alert("Put in a letter please");
    }
    fiveLetterWord.length === 5 ? (holdOn = true) : "";
  } else {
    if (event.key === "Backspace" && fiveLetterWord.length > 0) {
      document.getElementById(`letter-${count - 1}`).innerHTML = "";
      fiveLetterWord.pop();
      count--;
      holdOn = false;
    } else if (event.key === "Enter") {
      //validatie
      markInvalidWord(fiveLetterWord.join(""));
      fiveLetterWord = [];
      currentRow = [];
      holdOn = false;
    } else {
      console.log("nope");
    }
    //console.log(count);
  }
  // console.log(holdOn);
  // console.log(fiveLetterWord);
}
async function init() {
  // console.log("lets get started");
  // the state for the app

  // nab the word of the day
  // user adds a letter to the current guess
  function addLetter(letter) {}

  // use tries to enter a guess
  async function commit() {}
  // user hits backspace, if the the length of the string is 0 then do
  // nothing
  function backspace() {}

  // let the user know that their guess wasn't a real word
  // skip this if you're not doing guess validation

  // listening for event keys and routing to the right function
  // we listen on keydown so we can catch Enter and Backspace
  document.addEventListener("keydown", function handleKeyPress(event) {});
}
// a little function to check to see if a character is alphabet letter
// this uses regex (the /[a-zA-Z]/ part) but don't worry about it
// you can learn that later and don't need it too frequently
function isLetter(letter) {}

// show the loading spinner when needed
function setLoading(isLoading) {
  if (isLoading) {
    loadingDiv.classList.remove("hidden");
  } else {
    loadingDiv.classList.add("hidden");
  }
}

init();
window.addEventListener("keydown", keypressed);
window.addEventListener("load", nabWord);
