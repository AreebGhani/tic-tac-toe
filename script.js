console.log("Tic Tac Toe Game");

const musicSound = new Audio("sounds/music.mp3");
const moveSound = new Audio("sounds/move.mp3");
const gameOverSound = new Audio("sounds/gameover.mp3");

musicSound.play();

var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var box4 = document.getElementById("box4");
var box5 = document.getElementById("box5");
var box6 = document.getElementById("box6");
var box7 = document.getElementById("box7");
var box8 = document.getElementById("box8");
var box9 = document.getElementById("box9");

var displayTurn = document.getElementById("turn");
var displayWinTurn = document.getElementById("Winturn");

var reset = document.getElementById("reset");
var resetWin = document.getElementById("resetWin");

var turn = "X";

displayTurn.innerText = turn;

const changeTurn = (e) => {
  moveSound.play();
  if (!e.innerText) {
    e.innerText = turn;
    if (turn == "X") {
      turn = "0";
    } else {
      turn = "X";
    }
    displayTurn.innerText = turn;
  }
};

const Win = () => {
  musicSound.pause();
  gameOverSound.play();
  document.querySelector(".gameInfo").style.display = "none";
  document.querySelector(".container").style.display = "none";
  document.querySelector(".winContainer").style.display = "flex";
};
const checkWin = () => {
  var WinBox1 = [box1.innerText, box2.innerText, box3.innerText];
  var WinBox2 = [box4.innerText, box5.innerText, box6.innerText];
  var WinBox3 = [box7.innerText, box8.innerText, box9.innerText];
  var WinBox4 = [box1.innerText, box4.innerText, box7.innerText];
  var WinBox5 = [box2.innerText, box5.innerText, box8.innerText];
  var WinBox6 = [box3.innerText, box6.innerText, box9.innerText];
  var WinBox7 = [box1.innerText, box5.innerText, box9.innerText];
  var WinBox8 = [box3.innerText, box5.innerText, box7.innerText];
  var Winturn = turn;
  if (turn == "X") {
    Winturn = "0";
  } else {
    Winturn = "X";
  }
  if (WinBox1.every((e) => e == Winturn)) {
    displayWinTurn.innerText = Winturn;
    Win();
  }
  if (WinBox2.every((e) => e == Winturn)) {
    displayWinTurn.innerText = Winturn;
    Win();
  }
  if (WinBox3.every((e) => e == Winturn)) {
    displayWinTurn.innerText = Winturn;
    Win();
  }
  if (WinBox4.every((e) => e == Winturn)) {
    displayWinTurn.innerText = Winturn;
    Win();
  }
  if (WinBox5.every((e) => e == Winturn)) {
    displayWinTurn.innerText = Winturn;
    Win();
  }
  if (WinBox6.every((e) => e == Winturn)) {
    displayWinTurn.innerText = Winturn;
    Win();
  }
  if (WinBox7.every((e) => e == Winturn)) {
    displayWinTurn.innerText = Winturn;
    Win();
  }
  if (WinBox8.every((e) => e == Winturn)) {
    displayWinTurn.innerText = Winturn;
    Win();
  }
};

box1.addEventListener("click", () => {
  changeTurn(box1);
  checkWin();
});

box2.addEventListener("click", () => {
  changeTurn(box2);
  checkWin();
});

box3.addEventListener("click", () => {
  changeTurn(box3);
  checkWin();
});

box4.addEventListener("click", () => {
  changeTurn(box4);
  checkWin();
});

box5.addEventListener("click", () => {
  changeTurn(box5);
  checkWin();
});

box6.addEventListener("click", () => {
  changeTurn(box6);
  checkWin();
});

box7.addEventListener("click", () => {
  changeTurn(box7);
  checkWin();
});

box8.addEventListener("click", () => {
  changeTurn(box8);
  checkWin();
});

box9.addEventListener("click", () => {
  changeTurn(box9);
  checkWin();
});

reset.addEventListener("click", () => {
  window.location.reload();
});

resetWin.addEventListener("click", () => {
  window.location.reload();
});
