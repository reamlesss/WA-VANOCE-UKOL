const hexText = document.getElementById("hex-text");
const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const color3 = document.getElementById("color3");
const color4 = document.getElementById("color4");
const infoText = document.getElementById("info-text");
let playing = true;

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

let hex1 = generateHex(rightColor);
let hex2 = generateHex(hex1);
let hex3 = generateHex(hex2);
let hex4 = generateHex(hex3);

function setHexText() {
  hexText.innerHTML = rightColor;
  let randomnumber = Math.floor(Math.random() * 4) + 1;
  color1.style.backgroundColor = hex1;
  color2.style.backgroundColor = hex2;
  color3.style.backgroundColor = hex3;
  color4.style.backgroundColor = hex4;
  color1.style.boxShadow = "0px 0px 10px" + hex1;
  color2.style.boxShadow = "0px 0px 10px" + hex2;
  color3.style.boxShadow = "0px 0px 10px" + hex3;
  color4.style.boxShadow = "0px 0px 10px" + hex4;

  switch (randomnumber) {
    case 1:
      color1.style.backgroundColor = rightColor;
      color1.style.boxShadow = "0px 0px 10px" + rightColor;

      break;
    case 2:
      color2.style.backgroundColor = rightColor;
      color2.style.boxShadow = "0px 0px 10px" + rightColor;
      break;
    case 3:
      color3.style.backgroundColor = rightColor;
      color3.style.boxShadow = "0px 0px 10px" + rightColor;

      break;
    case 4:
      color4.style.backgroundColor = rightColor;
      color4.style.boxShadow = "0px 0px 10px" + rightColor;
      break;
  }
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
  infoText.innerHTML = "WRONG! This color is "
  colorText.innerHTML = color.toUpperCase();
  colorText.style.color = color.toUpperCase();
  infoText.appendChild(colorText);

  

}


function pickColor(index) {
  
  if(playing){
   

    switch (index) {
      case 1:
        if (
          rgbaToHex(color1.style.backgroundColor) == rightColor.toLowerCase()
        ) {
          infoText.innerHTML = "YOU WIN THATS THE ";
          const colorText = document.createElement("span");
          colorText.innerHTML = 'COLOR!'
          colorText.style.color = rgbaToHex(color1.style.backgroundColor).toUpperCase()
          infoText.appendChild(colorText);
          playing = false;
        } else {
          color1.style.display = "none";
          wrong(rgbaToHex(color1.style.backgroundColor));
        }
        break;
      case 2:
        if (
          rgbaToHex(color2.style.backgroundColor) == rightColor.toLowerCase()
        ) {
          infoText.innerHTML = "YOU WIN THATS THE COLOR!";
           const colorText = document.createElement("span");
          colorText.innerHTML = 'COLOR!'
          colorText.style.color = rgbaToHex(color2.style.backgroundColor).toUpperCase();
          infoText.appendChild(colorText);
          playing = false;
        } else {
          color2.style.display = "none";
          wrong(rgbaToHex(color2.style.backgroundColor));
        }
        break;
      case 3:
        if (
          rgbaToHex(color3.style.backgroundColor) == rightColor.toLowerCase()
        ) {
          infoText.innerHTML = "YOU WIN THATS THE COLOR!";
           const colorText = document.createElement("span");
          colorText.innerHTML = 'COLOR!'
          colorText.style.color = rgbaToHex(color3.style.backgroundColor).toUpperCase();
          infoText.appendChild(colorText);
          playing = false;
        } else {
          color3.style.display = "none";
          wrong(rgbaToHex(color3.style.backgroundColor));
        }
        break;
      case 4:
        if (
          rgbaToHex(color4.style.backgroundColor) == rightColor.toLowerCase()
        ) {
          infoText.innerHTML = "YOU WIN THATS THE COLOR!";
           const colorText = document.createElement("span");
          colorText.innerHTML = 'COLOR!'
          colorText.style.color = rgbaToHex(color4.style.backgroundColor).toUpperCase();
          infoText.appendChild(colorText);
          playing = false;
        } else {
          color4.style.display = "none";
          wrong(rgbaToHex(color4.style.backgroundColor));
        }
        break;
    }
  }
}

