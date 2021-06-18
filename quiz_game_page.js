var player1_name = "";
var player2_name = "";

function addUser() {
    player1_name = document.getElementById("p1name").value;
    player2_name = document.getElementById("p2name").value;

    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);

    window.location = "quiz_game_page.html";
}

function send() {

    player1_score = 0
    player2_score = 0

    document.getElementById("player1_name").innerHTML = player1_name + ":";
    document.getElementById("player2_name").innerHTML = player2_name + ":";

    document.getElementById("player1_score").innerHTML = player1_score;
    document.getElementById("player2_score").innerHTML = player2_score;

    document.getElementById("player_question").innerHTML = player1_name + "'s Turn To Give A Question";
    document.getElementById("player_answer").innerHTML = player2_name + "'s Turn To Answer";

    number1 = document.getElementById("1st_number").value;
    number2 = document.getElementById("2nd_number").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + "x" + number2 + "</h4>";
    answer_input = "<br> Answer : <input type='text' id='answer_input'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_number + answer_input + check_button;

    document.getElementById("output").innerHTML = row;
    document.getElementById("1st_number").value = "";
    document.getElementById("2nd_number").value = "";
}
function check() {

    get_answer = document.getElementById("input_check_box").value;
  
    if(get_answer == actual_answer) {
  
      if(answer_turn == "player1") {
        player1_score += 1;
        document.getElementById("player1_score").innerHTML = player1_score;
      }
      else {
        player2_score += 1;
        document.getElementById("player2_score").innerHTML = player2_score;
      }
    }
    if(question_turn == "player1") {
      question_turn = "player2";
      document.getElementById("player_question").innerHTML = + question_turn + "'s Turn To Give A Question";
      answer_turn = "player1";
      document.getElementById("player_answer").innerHTML = answer_turn + "'s Turn to Answer";
    }
    else {
      question_turn = "player_1";
      document.getElementById("player_question").innerHTML = question_turn + "'s Turn To Give A Question";
      answer_turn = "player2";
      document.getElementById("player_answer").innerHTML = answer_turn + "'s Turn to Answer";
    }

    document.getElementById("output").innerHTML = "";
}
  
  