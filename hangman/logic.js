// create minimum layout

// word array
// on start, randomly pick a word, count the letters, and add underscores for each on screen
// user selects a letter
// if correct, hidden letter appears.
// if incorrect, -1 life

window.onload = function() {
  let lives = 5;
  let words = [
    "Wes Montgomery",
    "Kamasi Washington",
    "Miles Davis",
    "Ryo Fukui",
    "Frank Zappa",
    "Charlie Parker"
  ];
  let wordArr = [];
  let input = document.getElementById("myInput");
  let underscore = "";
  let btnClick = document.querySelectorAll('.letterBtn');

  document.getElementById("btnStart").onclick = function start() {
    //console.log('hit start');
    shuffle();
  };

  for (var i = 0; i < btnClick.length; i++) {
    btnClick[i].addEventListener('click', function(event) {
      console.log(this.value);
    })
  }

  // document
  //   .querySelector(".letterBtn")
  //   .addEventListener("click", function(event) {
  //     let firedBtn = this.value;
  //     console.log(firedBtn);
  //   });



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
      word = word.replace(" ", "");
      arr.push(word[i]);
    }

    getMarkup(arr, spaces, word, value);
  }

  function getMarkup(arr, spaces, word, value) {
    let markup;
    console.log(arr);
    console.log(spaces);
    markup += ``;
    for (let i = 0; i < spaces.length; i++) {
      markup += `<p id='letter'>${spaces[i]}</p>`;
      //markup += "<p id='letter'>" + spaces[i] + "</p>";
    }

    console.log(btnClick);
    document.getElementById("currentWord").innerHTML = markup;
  }
};
