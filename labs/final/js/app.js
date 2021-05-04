//array of words
let words = [
  "anime",
  "reindeer",
  "rooster",
  "pineapple",
  "phoenix",
  "beard",
  "pirate",
  "sword",
  "sniper",
  "archaeologist",
];

//drawn canvas
function setup() {
  createCanvas(1510, 700);
  background("#b2eac1");
}

function draw() {
  noFill();
  //   Hangman Post
  line(700, 100, 700, 120);
  line(700, 100, 800, 100);
  line(800, 100, 800, 300);
  line(680, 300, 900, 300);
  //   Hanging Man
  circle(700, 135, 15);
  //   ^head
  line(700, 150, 700, 220);
  //   ^body
  line(700, 220, 680, 240);
  line(700, 220, 720, 240);
  //   ^legs
  line(700, 185, 680, 175);
  line(700, 185, 720, 175);
  //   ^arms
}
