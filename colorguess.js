const hexText = document.getElementById('hex-text');
function generateRandomHexCode() {
  
  const randomNum = Math.floor(Math.random() * 16777216);

  
  const hexCode = randomNum.toString(16).toUpperCase();

  const paddedHexCode = "000000".substring(0, 6 - hexCode.length) + hexCode;

  return "#" + paddedHexCode;
}

function setHexText() {
    hexText.innerHTML = generateRandomHexCode();
    
}
