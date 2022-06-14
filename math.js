player_1_name = localStorage.getItem("player1name");
player_2_name = localStorage.getItem("player2name");

	player1_score = 0;
	player2_score = 0;

document.getElementById("player1_name").innerHTML = player_1_name + " : ";
document.getElementById("player2_name").innerHTML = player_2_name + " : ";

document.getElementById("player1_score").innerHTML = player1_score ;
document.getElementById("player2_score").innerHTML = player2_score ;


function send(){
    N1=document.getElementById("no1").value;
    N2=document.getElementById("no2").value;
    Act_Ans = parseInt(N1)*parseInt(N2);

 QN = "<h4>" + N1 + "X" + N2 + "</h4>";
INPB = "<br> Answer : <input type='text'  id='InputCheckBox'>";
CHKB = "<br><br><button class='btn  btn-info' onclick='check()'>CHECK</button>";
row = QN + INPB + CHKB;
 
document.getElementById("output").innerHTML = row;
document.getElementById("N1").value="";
document.getElementById("N2").value="";

}

