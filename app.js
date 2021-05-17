let turnCount = 0;

// begins the game and disables replay button
function beginGame() {
  turnCount = 0;

  for (let i = 1; i <= 9; i += 1) {
    clearBox(i);

    document.getElementById("refreshBtn").style.visibility = "hidden";
  }

  
  document.turn = "X";
  
  document.winner = null;
  
  document.draw = false;

  setMessage(" ");

  document.getElementById("Message");
}

//function displays message above board for winner and draw
function setMessage(message) {

  document.getElementById("Message").innerText = message;
}


function switchTurn() {
  
  if (checkWinner(document.turn) && document.draw === false) {
    
    document.winner = document.turn;

    setMessage("Congratulations " + document.turn + "'s, you win!");


    
    document.getElementById("refreshBtn").style.visibility = "visible";
    
  } else if (document.draw === true) {
   
    setMessage("Draw! Play again?");
   

    document.getElementById("refreshBtn").style.visibility = "visible";
  }

  else if (document.turn == "X") {

    document.turn = "O";
   
    setMessage(" ");
    
    document.getElementById("Message");
   
  } else {
 
    document.turn = "X";
   
    setMessage(" ");
 
    document.getElementById("Message");
  }
}


function nextMove(cell) {

  if (document.winner != null) {

    

  } else if (cell.innerText == "") {

    cell.innerText = document.turn;

 
    switchTurn();
   
  } 
}



// checks for winner after each turn
function checkWinner(move) {

  turnCount += 1;

  let result = false;

  if (
    
    checkRow(1, 2, 3, move) ||
   
    checkRow(4, 5, 6, move) ||
   
    checkRow(7, 8, 9, move) ||
   
    checkRow(1, 4, 7, move) ||
   
    checkRow(2, 5, 8, move) ||
   
    checkRow(3, 6, 9, move) ||
    
    checkRow(1, 5, 9, move) ||
    
    checkRow(3, 5, 7, move)
  ) {
   
    result = true;
  } else if (turnCount > 8 && result === false) {
    document.draw = true;
  }
  return result;
}

function checkRow(a, b, c, move) {

  let result = false;


  if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {

    result = true;
  }
  return result;
}


function getBox(number) {
  return document.getElementById("cell" + number).innerText;
}

function clearBox(number) {
  document.getElementById("cell" + number).innerText = "";
}

