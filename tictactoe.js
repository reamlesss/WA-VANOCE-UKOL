let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;
const restartButton = document.getElementById("restartButton");

function handleClick(index) {
  if (gameBoard[index - 1] === "" && gameActive) {
    gameBoard[index - 1] = currentPlayer;
    document.getElementById(`button${index}`).textContent = currentPlayer;

    if (checkWinner()) {
      const winnerText = document.getElementById("winnerText");
      winnerText.textContent = `WINNER IS PLAYER ${currentPlayer}`;
      winnerText.classList.remove("win-text-hidden");
      winnerText.classList.add("win-text-visible");

      restartButton.classList.remove("restart-button-hidden");
      restartButton.classList.add("restart-button-visible");

      gameActive = false;
    } else if (gameBoard.every((cell) => cell !== "")) {
      document.getElementById("playerTurn").textContent = "It's a tie!";
      restartButton.classList.remove("restart-button-hidden");
      restartButton.classList.add("restart-button-visible");

      gameActive = false;
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X";
      document.getElementById(
        "playerTurn"
      ).textContent = `Player ${currentPlayer}'s turn`;
    }
  }
}

function checkWinner() {
  const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (
      gameBoard[a] &&
      gameBoard[a] === gameBoard[b] &&
      gameBoard[a] === gameBoard[c]
    ) {
      return true;
    }
  }

  return false;
}

function newGame() {
  location.reload();
}
