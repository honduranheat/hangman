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
  let btnClick = document.querySelectorAll(".letterBtn");
  let display = ``;
  let displayLives = ``;
  let displayGuesses = ``;
  let displayWord = ``;
  let displayDiv = ``;
  let value = 0;
  let match = 0;

  document.getElementById("btnStart").onclick = function start() {
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
    lives = 5;
    guessed = [];
    let lowerArr = [];
    let arr = [];
    let spaces = [];
    let word = words[value];

    for (let i = 0; i < word.length; i++) {
      spaces.push(" _ ");
      arr.push(word[i]);
    }
    // console.log(word);
    // console.log(spaces);
    // console.log(arr);
    getMarkup(arr, spaces, word, value);
  }

  function getMarkup(arr, spaces, word, value) {
    let displayDiv = ``;
    let displayWord = ``;
    let displayLives = ``;
    let displayGuesses = ``;
    let display =  displayDiv + displayLives + displayGuesses;
    displayLives = `<p>Lives: ${lives}</p>`;
    displayGuesses = `<p> Letters Guessed: ${guessed}</p>`;

    for (let i = 0; i < spaces.length; i++) {
      displayWord += `<p class='letter row'>${spaces[i]}</p>`;
    }

  console.log(spaces);

    displayDiv = `<div id='displayDiv' class='row'>${displayWord}</div>`;
    document.getElementById("display").innerHTML = display;
     
    game(arr, spaces, word, value, display);
  }

  function game(arr, spaces, displayWord, display, displayLives, displayGuesses, displayDiv) {
    let isMatch;
   
    //displayLives = `<p>Lives: ${lives}</p>`;

    for (var i = 0; i < btnClick.length; i++) {
      btnClick[i].addEventListener("click", function(event) {
        let click = this.value;

        guessed.push(click);

        for (let g = 0; g < guessed.length; g++) {
          guessed.join("");
          displayGuesses = `<p> Letters Guessed: ${guessed}</p>`;
        }

        for (let x = 0; x != arr.length; x++) {
          if (arr.indexOf(click) != -1) {
            if (click === arr[x]) {
              let join;

              console.log("matching letter");
              spaces[x] = arr[x];
              console.log(spaces);
              console.log(arr);

              isMatch = true;
              join = spaces.join("  ");

              displayWord = `<p id='letter' class='row'>${spaces}</p>`;
            }
          } else {
            console.log("no match");
            isMatch = false;
            console.log(isMatch);
            
          }
        }

        if (isMatch === false) {
          console.log("not a match");
          console.log(guessed);
          lives--;
          displayLives = `<p>Lives: ${lives}</p>`;
          
        }

        if (lives === 0) {
          userLose();
        }

        //for (let l = 0; l < spaces.length; l++) {
        if (spaces === arr) {
          userWin();
        }
        //}

        displayDiv = `<div id='displayDiv' class='row'>${displayWord}</div>`;
        display = displayDiv + displayLives + displayGuesses;
        document.getElementById("display").innerHTML = display;
      });
    }
  }

  function setColor() {}

  function userLose() {
    console.log("game over");
    display = `<div id='lose'><p>You Lose!</p><div><button id='btnStart' class='justify-center'>Play Again?</button>`;
    document.getElementById("restart").innerHTML = display;

    document.getElementById("btnStart").onclick = function start() {
      display = ``;
      value++;
      document.getElementById("restart").innerHTML = display;
      startGame();
    };
  }

  function userWin() {
    display = `<div id='lose'><p>You Win!</p><div><button id='btnStart' class='justify-center'>Play Again?</button>`;
    document.getElementById("restart").innerHTML = display;

    document.getElementById("btnStart").onclick = function start() {
      display = ``;
      value++;

      document.getElementById("restart").innerHTML = display;
      startGame();
    };
  }
};
