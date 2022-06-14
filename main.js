function adduser(){
    player_1=document.getElementById("player1L").value;
    player_2=document.getElementById("player2L").value;

    localStorage.setItem("player1name", player_1);
    localStorage.setItem("player2name", player_2);

    window.location="math.html";  
}
