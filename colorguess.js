const hexText = document.getElementById("hex-text");
const circleCont = document.getElementById("circle-cont");

const infoText = document.getElementById("info-text");
const newGameButton = document.getElementById("new-game-button");
let playing = true;
let level = 4;

function showNewGameButton() {
  newGameButton.classList.remove("new-game-button-hide");
  newGameButton.classList.add("new-game-button-show");
}

function startNewGame() {
  location.reload();
}

function generateRandomHexCode() {
  const randomNum = Math.floor(Math.random() * 16777216);

  const hexCode = randomNum.toString(16).toUpperCase();

  const paddedHexCode = "000000".substring(0, 6 - hexCode.length) + hexCode;

  return "#" + paddedHexCode;
}

function generateHex(previousColor) {
  let newHex = generateRandomHexCode();
  if (previousColor === newHex) {
    newHex = generateRandomHexCode();
  }
  return newHex;
}

rightColor = generateRandomHexCode();

function createCircles() {
  hexText.innerHTML = rightColor;

  const randomNum = Math.floor(Math.random() * level);

  for (let i = 0; i < level; i++) {
    const circle = document.createElement("div");
    circle.classList.add("color-button-visible");

    if (i == randomNum) {
      circle.style.backgroundColor = rightColor;
      circle.style.boxShadow = "0px 0px 10px " + rightColor;
      hexText.innerHTML = rightColor;
      circle.addEventListener("click", function () {
        if (playing) {
          infoText.innerHTML = "YOU WIN THAT'S THE ";
          const colorText = document.createElement("span");
          colorText.innerHTML = "COLOR!";
          colorText.style.color = circle.style.backgroundColor;
          infoText.appendChild(colorText);
          showNewGameButton();
        }
      });
    } else {
      circleColor = generateRandomHexCode();
      circle.style.backgroundColor = circleColor;
      circle.style.boxShadow = "0px 0px 10px " + circleColor;
      circle.addEventListener("click", function () {
        if (playing) {
          wrong(rgbaToHex(circle.style.backgroundColor));
          circle.style.display = "none";
        }
      });
    }

    circleCont.appendChild(circle);
  }
}

function pickColor(pickedColor) {
  if (pickedColor === rightColor) {
    console.log("WON");
  }
}

function changeLevel(newLevel) {
  level = newLevel;
  circleCont.innerHTML = "";
  createCircles();
}

function rgbaToHex(rgba) {
  var hex = rgba
    .replace(/^rgba?\(|\s+|\)$/g, "")
    .split(",")
    .map((x) => (+x).toString(16).padStart(2, "0"))
    .join("");
  return "#" + hex;
}

function wrong(color) {
  var colorText = document.createElement("span");
  infoText.innerHTML = "WRONG! This color is ";
  colorText.innerHTML = color.toUpperCase();
  colorText.style.color = color.toUpperCase();
  infoText.appendChild(colorText);
}
