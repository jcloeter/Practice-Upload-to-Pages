import * as model from "../src/model.js";

console.log("Welcome to the application 😉🎶🎂🎉👏🤷‍♀️🐱‍👓🤷‍♀️🐱‍🏍😘💋");

model.Hi();

console.log(
  "script was changed here as well to see if new version has been updated"
);

const play = document.getElementById("play");
const sound = document.getElementById("whoosh");
console.log(sound);

const otherSound = new Audio("whoosh.wav");
const thirdSound = new Audio("whoosh.wav");
const fourthSound = new Audio("whoosh.wav");

play.addEventListener("click", function () {
  sound.play();
  console.log("whoosh!");
  repeatSound();
});

const repeatSound = function () {
  setInterval(() => {
    console.log("whoosh again");
    sound.play();
    otherSound.play();
    thirdSound.play();
    fourthSound.play();
    console.log(sound.currentTime);
  }, 2000);
};
