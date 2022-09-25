function send(){
    Number_1=document.getElementById("Number_1").value;
    Number_2=document.getElementById("Number_2").value;
    actual_answer = parseInt(Number_1) * parseInt(Number_2);

    question_word = "<h4>" + Number_1 + "X" + Number_2 + "</h4>";
     input_box = "<br>Answer : <input type='text' id='input_check_box'>";
      check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
       row = question_word + input_box + check_button ;
        document.getElementById("output").innerHTML = row;
         document.getElementById("Number_1").value = "";
         document.getElementById("Number_2").value = "";
}

question_turn = "player1"
answer_turn = "player2"

function check(){
    get_answer=document.getElementById("input_check_box").value;
    if(get_answer == actual_answer)
    {
       
            if(answer_turn == "player1"){
                player1_score = player1_score + 1;
                document.getElementById("player1_score").innerHTML = player1_score;
            }
            else{
                player2_score = player2_score + 1;
                document.getElementById("player2_score").innerHTML = player2_score;
            }
    

    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    }
    else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name; 
    }
    
    
    if(answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player2_name;
    }
    else{
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn - " + player1_name; 
    }
    document.getElementById("output").innerHTML = "";
    }
}

