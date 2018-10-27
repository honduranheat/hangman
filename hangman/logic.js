// create minimum layout

// word array
// on start, randomly pick a word, count the letters, and add underscores for each on screen
// user selects a letter
// if correct, hidden letter appears.
// if incorrect, -1 life

window.onload = function() {
  let lives = 5;
  let words = ["nintendo", "playstation", "sega", "atari", "microsoft"];
  let guessed = [];
  let wordArr = [];
  let input = document.getElementById("myInput");
  let underscore = "";
  let btnClick = document.querySelectorAll(".letterBtn");

  document.getElementById("btnStart").onclick = function start() {
    //console.log('hit start');
    shuffle();
  };

  function shuffle() {
    var currentIndex = words.length,
      temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = words[currentIndex];
      words[currentIndex] = words[randomIndex];
      words[randomIndex] = temporaryValue;
    }

    startGame();
  }

  function startGame() {
    let value = 0;
    let arr = [];
    let spaces = [];
    let word = words[value];

    for (let i = 0; i < word.length; i++) {
      spaces.push(" _ ");
      //word = word.replace(" ", "");
      arr.push(word[i]);
    }
    console.log(word);
    getMarkup(arr, spaces, word, value);
  }

  function getMarkup(arr, spaces, word, value) {
    let display;
    let displayLives;
    let displayGuesses;
    let displayWord;

    displayWord += ``;
    for (let i = 0; i < spaces.length; i++) {
      display += `<p id='letter'>${
        spaces[i]}</p>`
    }
    // displayLives = `<p>Lives Remaining: ${lives} <br>`;
    // displayGuesses = `<p>Guesses Left: ${guessed} <br>`;

    // display = displayWord + displayLives + displayGuesses;

    document.getElementById("currentWord").innerHTML = displayWord;
    game(arr, spaces, word, value, displayWord);
  }

  function game(arr, spaces, word, value, displayWord) {
    let displayLives;
    let displayGuesses;

    for (var i = 0; i < btnClick.length; i++) {
      btnClick[i].addEventListener("click", function(event) {
        let click = this.value;
        let arrUp = arr.map(x => {
          return x.toUpperCase();
        });

        //click = click.toLowerCase();
        guessed.push(click);
        for (let g = 0; g < guessed.length; g++) {
          displayGuesses = `<p> Letters Guessed: ${guessed}</p>`;
        }

        // if (arr.indexOf(click) != 1) {
        for (let x = 0; x != arr.length; x++) {
          if (arr.indexOf(click) != -1) {
            if (click === arr[x]) {
              console.log("matching letter");
              // console.log(click);
              console.log(arr[x] === click);
              spaces[x] = arr[x];
              console.log(spaces);
              console.log(arr);
              console.log(click);
              displayWord = `<p id='letter'>${spaces}</p>`;
              //guesses = `<p>${guessed}</p>`;
            } else {
              console.log("not a match");
              // guessed.push(click);
              console.log(guessed);
              lives--;
            }
          }
        }
        //}
        document.getElementById("currentWord").innerHTML = displayWord;
        // document.getElementById("lettersGuessed").innerHTML = guesses;
        // document.getElementById("currentWord").innerHTML = markup;
        // document.getElementById("lettersGuessed").innerHTML = guesses;
      });
    }
  }

  // guesses() {

  // }
};
