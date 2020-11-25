
// One player

function onePlayer(){
    var boxes = document.getElementsByClassName('three-grid-layout-item');
    document.getElementById("ways-to-play").style = "display: none";
    document.getElementById("players").style = "display: block";

}

function goBack(){
    document.getElementById("ways-to-play").style = "display: block";
    document.getElementById("players").style = "display: none";
}

// Player type

function playerX(){
    document.getElementById("ways-to-play").style = "display: none";
    document.getElementById("players").style = "display: none";
    document.getElementById("grid-layout").style = "display: block";
}

// function playerO(){
//     playerX();

// The computer playing move

function computerTurn(){
    var computerMove = Math.floor(Math.random()*9)+1;
    
    if(computerMove == 1){
        boxes[0].innerHTML = "O";
        boxes[0].style = "font-size: 70px; color: black; padding-top: 20%";
        if(boxes[0].addEventListener("click", function(a){
            boxes[0].innerHTML = "O";
            boxes[0].style = "font-size: 70px; color: black; padding-top: 20%";
            alert("Field already occupied")
        }));
    }
    else if(computerMove == 2){
        boxes[1].innerHTML = "O";
        boxes[1].style = "font-size: 70px; color: black; padding-top: 20%";
        if(boxes[1].addEventListener("click", function(a){
            boxes[1].innerHTML = "O";
            boxes[1].style = "font-size: 70px; color: black; padding-top: 20%";
            alert("Field already occupied")
        }));
    }
    else if(computerMove == 3){
        boxes[2].innerHTML = "O";
        boxes[2].style = "font-size: 70px; color: black; padding-top: 20%";
        if(boxes[2].addEventListener("click", function(a){
            boxes[2].innerHTML = "O";
            boxes[2].style = "font-size: 70px; color: black; padding-top: 20%";
            alert("Field already occupied")
        }));
    }
    else if(computerMove == 4){
        boxes[3].innerHTML = "O";
        boxes[3].style = "font-size: 70px; color: black; padding-top: 20%";
        if(boxes[3].addEventListener("click", function(a){
            boxes[3].innerHTML = "O";
            boxes[3].style = "font-size: 70px; color: black; padding-top: 20%";
            alert("Field already occupied")
        }));
    }
    else if(computerMove == 5){
        boxes[4].innerHTML = "O";
        boxes[4].style = "font-size: 70px; color: black; padding-top: 20%";
        if(boxes[4].addEventListener("click", function(a){
            boxes[4].innerHTML = "O";
            boxes[4].style = "font-size: 70px; color: black; padding-top: 20%";
            alert("Field already occupied")
        }));
    }
    else if(computerMove == 6){
        boxes[5].innerHTML = "O";
        boxes[5].style = "font-size: 70px; color: black; padding-top: 20%";
        if(boxes[5].addEventListener("click", function(a){
            boxes[5].innerHTML = "O";
            boxes[5].style = "font-size: 70px; color: black; padding-top: 20%";
            alert("Field already occupied")
        }));
    }
    else if(computerMove == 7){
        boxes[6].innerHTML = "O";
        boxes[6].style = "font-size: 70px; color: black; padding-top: 20%";
        if(boxes[6].addEventListener("click", function(a){
            boxes[6].innerHTML = "O";
            boxes[6].style = "font-size: 70px; color: black; padding-top: 20%";
            alert("Field already occupied")
        }));
    }
    else if(computerMove == 8){
        boxes[7].innerHTML = "O";
        boxes[7].style = "font-size: 70px; color: black; padding-top: 20%";
        if(boxes[7].addEventListener("click", function(a){
            boxes[7].innerHTML = "O";
            boxes[7].style = "font-size: 70px; color: black; padding-top: 20%";
            alert("Field already occupied")
        }));
    }
    else if(computerMove == 9){
        boxes[8].innerHTML = "O";
        boxes[8].style = "font-size: 70px; color: black; padding-top: 20%";
        if(boxes[8].addEventListener("click", function(a){
            boxes[8].innerHTML = "O";
            boxes[8].style = "font-size: 70px; color: black; padding-top: 20%";
            alert("Field already occupied")
        }));
    }
}

// Actual game program

var boxes = document.querySelectorAll(".three-grid-layout-item");
Array.from(boxes).forEach(function(play){
        play.addEventListener("click", boxClick, {once: true})
        
    });

function boxClick(e){
    var humanMove = e.target;
    humanMove.innerHTML = "X"
    humanMove.style = "font-size: 70px; color: black; padding-top: 20%";

    computerTurn();

}
