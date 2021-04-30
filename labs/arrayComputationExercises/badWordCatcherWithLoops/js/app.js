let badWords = document.getElementById("badWords");
let results = document.getElementById("results");
let tally = document.getElementById("tally");

function detectBadWords() {
  let userInput = badWords.value;
  let wordArray = userInput.split(" ");

  let badWord1 = "clear";
  let badWord2 = "water";
  let badWord3 = "tires";

  let tallyCount = 0;

  for (i = 0; i < wordArray.length; i++) {
    if (wordArray[i].toLowerCase() == badWord1) {
      tallyCount += 1;
      results.innerHTML = "Bad Word(s) Detected";
    }
    if (wordArray[i].toLowerCase() == badWord2) {
      tallyCount += 1;
      results.innerHTML = "Bad Word(s) Detected!";
    }
    if (wordArray[i].toLowerCase() == badWord3) {
      tallyCount += 1;
      results.innerHTML = "Bad Word(s) Detected!";
    } else if (tallyCount <= 0) {
      results.innerHTML = "No Bad Words Detected!";
    }
    tally.innerHTML = tallyCount;
  }
  badWords.value = "";
}
