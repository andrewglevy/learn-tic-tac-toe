$(document).ready( function(){
  var board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  var isItXTurn = true;
  var isGameWon = false;
  var isGameDrawn = false;
  var player1;
  var player2;
  player1 = prompt("Player 1, please enter your name:", "NAME");
  player2 = prompt("Player 2, please enter your name:", "NAME");
  $("#vs").prepend(player1);
  $("#vs").append(player2);
  var boxChanger = {
    box0: 0,
    box1: 1,
    box2: 2,
    box3: 3,
    box4: 4,
    box5: 5,
    box6: 6,
    box7: 7,
    box8: 8
  }

  function checkGame(){
    if (board[0] !=0 && board[1] != 0 && board[2] !=0 && board[0] == board[1] && board[0] == board[2] && board[1] == board[2]){
      isGameWon = true;
    } else if (board[3] !=0 && board[4] != 0 && board[5] !=0 && board[3] == board[4] && board[4] == board[5] && board[5] == board[3]) {
      isGameWon = true;
    } else if (board[6] !=0 && board[7] != 0 && board[8] !=0 && board[6] == board[7] && board[7] == board[8] && board[6] == board[8]){
      isGameWon = true;
    } else if (board[0] !=0 && board[3] != 0 && board[6] !=0 && board[0] == board[3] && board[0] == board[6] && board[3] == board[6]){
      isGameWon = true;
    } else if (board[1] !=0 && board[4] != 0 && board[7] !=0 && board[1] == board[4] && board[1] == board[7] && board[4] == board[7]){
      isGameWon = true;
    } else if (board[2] !=0 && board[5] != 0 && board[8] !=0 && board[2] == board[5] && board[8] == board[2] && board[5] == board[8]){
      isGameWon = true;
    } else if (board[0] !=0 && board[4] != 0 && board[8] !=0 && board[0] == board[4] && board[4] == board[8] && board[8] == board[0]){
      isGameWon = true;
    } else if (board[2] !=0 && board[4] != 0 && board[6] !=0 && board[2] == board[4] && board[4] == board[6] && board[2] == board[6]){
      isGameWon = true;
    } else if (!board.includes(0)){
      isGameDrawn = true;
    }
  }

  function gameEnd() {
    if (isGameWon && isItXTurn){
      $("p").text(player2 + " is the winner!");
    }
    if (isGameWon && !isItXTurn){
      $("p").text(player1 + " is the winner!");
    }
    if (isGameDrawn){
      $("p").text("The game is a draw");
    }
  }

 $("th").on("click",function() {
   var index;
   if ($(this).text() == ("") && isItXTurn && !isGameWon && !isGameDrawn) {
     $(this).text("x");
     $(this).addClass("X")
     isItXTurn = false;
     index = $(this).attr("id");
     board[boxChanger[index]] = 1;
   } else if ($(this).text() == ("") && isItXTurn == false && !isGameWon && !isGameDrawn) {
     $(this).text("o");
     isItXTurn = true;
     index = $(this).attr("id");
     board[boxChanger[index]] = 2;
     $(this).addClass("O")
   }
   checkGame();
   gameEnd();
  });
 });
