//stores the current state of the board
//current state is logged every time a move is made or reset button is pressed
const boardState = [
    "", "", "",
    "", "", "",
    "", "", ""
];

//stores the score and win streak of both players
let player1Score = 0;
let player2Score = 0;
let playerOneWinStreak = 0;
let playerTwoWinStreak = 0;

//holds current turn value
//holds the current value of the winner
let whosTurn = "player1";
let turnValue = 0;
let winner = "";


//reset button function that will clear the board and reset the 'boardState'
function resetBoard () {
for (i=0; i<=8; i++) {
    boardState[i] = "";
    document.getElementById("b"+(i+1)).style.backgroundColor = "lightGray";
}
    console.log(boardState);
    whosTurn = "player1";
    console.log("it is " + whosTurn + "'s turn");
    console.log("Board was reset");
    document.getElementById("winnerDisplay1").innerHTML = "";
    document.getElementById("winnerDisplay2").innerHTML = "";
    document.getElementById("drawDisplay").innerHTML = "";
    winner = "";
    turnValue = 0;
};

//single function to be used in place of 9 different functions
//will know if a box is selected, and will not allow the use to selected the same box, more than one time
//when players clicks on a square
//'boxIndex' is 'boxNum' - 1
function boxSelect(boxNum, boxIndex) {
    
    if ( winner == "") {
        if ( boardState[boxIndex] == "") { 
            if ( whosTurn == "player1") {
                document.getElementById("b" + boxNum).style.backgroundColor = "red";
                delete boardState[boxIndex];
                boardState[boxIndex] = "p1";
                console.log(boardState);
                checkBoard(1);
                whosTurn = "player2";
                turnValue++;
                console.log(turnValue);
                console.log("it is " + whosTurn + "'s turn");
                checkDraw();
            } else {
                document.getElementById("b" + boxNum).style.backgroundColor = "blue";
                delete boardState[boxIndex];
                boardState[boxIndex] = "p2";
                console.log(boardState);
                checkBoard(2);
                whosTurn = "player1";
                turnValue++;
                console.log(turnValue);
                console.log("it is " + whosTurn + "'s turn");
                checkDraw();
            }
        } else {
            console.log("Box was already selected");

        }
    } else {

    };
};

//checks the board for a winner
//basically a huge mess of box cords used to determine if someone is a winner
//writes into the ID 'winnerDisplay' the current winner
function checkBoard(playerNumber) {
if ( boardState[0] == "p"+playerNumber && boardState[1] == "p"+playerNumber && boardState[2] == "p"+playerNumber) {
    console.log("Player " + playerNumber + " wins!" );
    winner = "player" + playerNumber;
} else if ( boardState[3] == "p"+playerNumber && boardState[4] == "p"+playerNumber && boardState[5] == "p"+playerNumber) {
    console.log("Player " + playerNumber + " wins!" );
    winner = "player" + playerNumber;
} else if ( boardState[6] == "p"+playerNumber && boardState[7] == "p"+playerNumber && boardState[8] == "p"+playerNumber) {
    console.log("Player " + playerNumber + " wins!" );
    winner = "player" + playerNumber;
} else if ( boardState[0] == "p"+playerNumber && boardState[3] == "p"+playerNumber && boardState[6] == "p"+playerNumber) {
    console.log("Player " + playerNumber + " wins!" );
    winner = "player" + playerNumber;
} else if ( boardState[1] == "p"+playerNumber && boardState[4] == "p"+playerNumber && boardState[7] == "p"+playerNumber) {
    console.log("Player " + playerNumber + " wins!" );
    winner = "player" + playerNumber;
} else if ( boardState[2] == "p"+playerNumber && boardState[5] == "p"+playerNumber && boardState[8] == "p"+playerNumber) {
    console.log("Player " + playerNumber + " wins!" );
    winner = "player" + playerNumber;
} else if ( boardState[0] == "p"+playerNumber && boardState[4] == "p"+playerNumber && boardState[8] == "p"+playerNumber) {
    console.log("Player " + playerNumber + " wins!" );
    winner = "player" + playerNumber;
} else if ( boardState[2] == "p"+playerNumber && boardState[4] == "p"+playerNumber && boardState[6] == "p"+playerNumber) {
    console.log("Player " + playerNumber + " wins!" );
    winner = "player" + playerNumber;
} else {
    console.log("No winner");
    winner = ""
}

if ( winner == "player1" ) {
    document.getElementById("winnerDisplay1").innerHTML = "Player 1 Wins!";
    addWin(1);
} else if ( winner == "player2" ) {
    document.getElementById("winnerDisplay2").innerHTML = "Player 2 Wins!";
    addWin(2);
} else {
}}

//sets player one's name to the user input
function playerOneNameChange () {
var nameOne = prompt("Enter a name ( Limit 12 characters )");
document.getElementById("playerOneName").innerHTML = nameOne;
}

//sets player two's name to the user input
function playerTwoNameChange () {
var nameTwo = prompt("Enter a name ( Limit 12 characters )");
document.getElementById("playerTwoName").innerHTML = nameTwo;
}

//adds the score and win streak and updates them in real time
function addWin (winner) {
if ( winner == 1 ) {
    player1Score++;
    playerOneWinStreak++;
    playerTwoWinSteak = 0;
    document.getElementById("playerOneScoreBoard").innerHTML = ("Win Streak = " + playerOneWinStreak + "<br><br> Wins = " + player1Score);
    document.getElementById("playerTwoScoreBoard").innerHTML = ("Win Streak = " + playerTwoWinSteak + "<br><br> Wins = " + player2Score);
} else if ( winner == 2 ) {
    player2Score++;
    playerTwoWinStreak++;
    playerOneWinStreak = 0;
    document.getElementById("playerTwoScoreBoard").innerHTML = ("Win Streak = " + playerTwoWinStreak + "<br><br> Wins = " + player2Score);
    document.getElementById("playerOneScoreBoard").innerHTML = ("Win Streak = " + playerOneWinStreak + "<br><br> Wins = " + player1Score);
} else {
}}

//checks the board to find if a tie has been created
//Unwinable games will be detected as well

//draw id = drawDisplay

function checkDraw () {
    if ( (boardState !== ("","","","","","","","","")) && turnValue >= 9 && winner == "") {
        console.log("Game is a draw!");
        document.getElementById("drawDisplay").innerHTML = "Draw!";
    } else {

    }}