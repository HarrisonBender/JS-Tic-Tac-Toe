let turnCount = 0;

function beginGame() {
  turnCount = 0;

  for (let i = 1; i <= 9; i += 1) {
    clearBox(i);

    document.getElementById("refreshBtn").style.visibility = "hidden";
  }

  
  document.turn = "X";
  
  document.winner = null;
  
  document.cat = false;

  setTurnMessage(document.turn + "'s start first!");

  document.getElementById("turnMessage");
}


function setTurnMessage(message) {

  document.getElementById("turnMessage").innerText = message;
}


function switchTurn() {
  
  if (checkWinner(document.turn) && document.cat === false) {
    
    document.winner = document.turn;

    setTurnMessage("Congratulations " + document.turn + "'s, you win!");


    
    document.getElementById("refreshBtn").style.visibility = "visible";
    
  } else if (document.cat === true) {
   
    setTurnMessage("Draw! Play again?");
   

    document.getElementById("refreshBtn").style.visibility = "visible";
  }

  else if (document.turn == "X") {

    document.turn = "O";
   
    setTurnMessage("It is " + document.turn + "'s turn");
    
    document.getElementById("turnMessage");
   
  } else {
 
    document.turn = "X";
   
    setTurnMessage("It is " + document.turn + "'s turn.");
 
    document.getElementById("turnMessage");
  }
}


function nextMove(square) {

  if (document.winner != null) {

    

  } else if (square.innerText == "") {

    square.innerText = document.turn;

 
    switchTurn();
   
  } 
}




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
    document.cat = true;
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
  return document.getElementById("square" + number).innerText;
}

function clearBox(number) {
  document.getElementById("square" + number).innerText = "";
}
