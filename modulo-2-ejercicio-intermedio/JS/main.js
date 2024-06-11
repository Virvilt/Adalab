"use strict";

function getRandomNumber(max) {
  return parseInt(Math.random() * max);
}

const button = document.querySelector(".js__btn");
const numberInput = document.querySelector(".js__number");
const secretNumber = getRandomNumber(100);
const help = document.querySelector(".js__help");
const times = document.querySelector(".js__times");
const maxtimes = 10;
let currentTimes = 0;
const maxNumber = 100;
const minNumber = 1;

console.log(button);

button.addEventListener("click", (ev) => {
  if (currentTimes < maxtimes) {
    console.log("el valor de numero secreto es : " + secretNumber);
    addTimes();
    if (numberInput.value < minNumber || numberInput.value > maxNumber) {
      help.innerHTML = "El número debe estar entre 1 y 100.";
    } else {
      if (numberInput.value < secretNumber) {
        help.innerHTML = "Demasiado bajo";
      } else if (numberInput.value > secretNumber) {
        help.innerHTML = "Demasiado alto";
      } else {
        help.innerHTML = "Has ganado campeona!!!";
      }
    }

    /*     writeHelp("Pista: Escribe el número y dale a Prueba"); */
  }
});

function writeHelp(message) {
  help.innerHTML = message;
}

function addTimes() {
  currentTimes++;
  times.innerHTML = currentTimes;
}
