const board = document.getElementById('board');
const result = document.getElementById('result');
let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameActive = true;

function handleClick(index) {
    if (gameBoard[index] === '' && gameActive) {
        gameBoard[index] = currentPlayer;
        updateBoard();
        if (checkWinner()) {
            result.textContent = `${currentPlayer} wins!`;
            gameActive = false;
        } else if (isBoardFull()) {
            result.textContent = 'It\'s a draw!';
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function updateBoard() {
    for (let i = 0; i < 9; i++) {
        board.children[i].textContent = gameBoard[i];
    }
}

function checkWinner() {
    const winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    return winConditions.some(condition => {
        const [a, b, c] = condition;
        return gameBoard[a] !== '' && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c];
    });
}

function isBoardFull() {
    return gameBoard.every(cell => cell !== '');
}
