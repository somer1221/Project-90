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
    
}