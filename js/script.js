
// One player

function onePlayer(){
    var boxes = document.getElementsByClassName('three-grid-layout-item');
    document.getElementById("ways-to-play").style = "display: none";
    document.getElementById("players").style = "display: block";

}

// Two player

// function twoPlayer(){
//     onePlayer();
// }

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
// }



// Actual game program

var boxes = document.querySelectorAll(".three-grid-layout-item");
Array.from(boxes).forEach(function(play){
    play.addEventListener("click", function(e){
        var humanMove = e.target;
        humanMove.innerHTML = "X"
        humanMove.style = "font-size: 70px; color: black; padding-top: 20%";

        var computerMove = Math.floor(Math.random()*9)+1;
        if(computerMove == 1){
            boxes[0].innerHTML = "O";
            boxes.style = "font-size: 70px; color: white; padding-top: 20%";
        }
        else if(computerMove == 2){
            boxes[1].innerHTML = "O";
            boxes[1].style = "font-size: 70px; color: white; padding-top: 20%";
        }
        else if(computerMove == 3){
            boxes[2].innerHTML = "O";
            boxes[2].style = "font-size: 70px; color: white; padding-top: 20%";
        }
        else if(computerMove == 4){
            boxes[3].innerHTML = "O";
            boxes[3].style = "font-size: 70px; color: white; padding-top: 20%";
        }
        else if(computerMove == 5){
            boxes[4].innerHTML = "O";
            boxes[4].style = "font-size: 70px; color: white; padding-top: 20%";
        }
        else if(computerMove == 6){
            boxes[5].innerHTML = "O";
            boxes[5].style = "font-size: 70px; color: white; padding-top: 20%";
        }
        else if(computerMove == 7){
            boxes[6].innerHTML = "O";
            boxes[6].style = "font-size: 70px; color: white; padding-top: 20%";
        }
        else if(computerMove == 8){
            boxes[7].innerHTML = "O";
            boxes[7].style = "font-size: 70px; color: white; padding-top: 20%";
        }
        else if(computerMove == 9){
            boxes[8].innerHTML = "O";
            boxes[8].style = "font-size: 70px; color: White; padding-top: 20%";
        }
    });
})

// Winning conditions


// var boxes = document.getElementsByClassName("three-grid-layout-item");

// Array.from(boxes).forEach(function(){
//     for(i = 0; i < boxes.length; i++){
//         boxes[i].addEventListener("click", function(e){
//             var humanPlayer = e.target;
//             humanPlayer.innerHTML ="X"
//             humanPlayer.style = "font-size: 70px; color: black; padding-top: 20%";
            
//             var computer = Math.floor(Math.random()*9)+1;
//             console.log(computer);
//             if (computer == 1){
//                 boxes[0].innerHTML = "o";
//                 boxes[0].style = "font-size: 70px; color: black; padding-top: 20%";
//             }
//             else if (computer == 2){
//                 boxes[1].innerHTML = "o";
//                 boxes[1].style = "font-size: 70px; color: black; padding-top: 20%";
//             }
//             else if (computer == 3){
//                 boxes[2].innerHTML = "o";
//                 boxes[2].style = "font-size: 70px; color: black; padding-top: 20%";
//             }
//             else if (computer == 4){
//                 boxes[3].innerHTML = "o";
//                 boxes[3].style = "font-size: 70px; color: black; padding-top: 20%";
//             }
//             else if (computer == 5){
//                 boxes[4].innerHTML = "o";
//                 boxes[4].style = "font-size: 70px; color: black; padding-top: 20%";
//             }
//             else if (computer == 6){
//                 boxes[5].innerHTML = "o";
//                 boxes[5].style = "font-size: 70px; color: black; padding-top: 20%";
//             }
//             else if (computer == 7){
//                 boxes[6].innerHTML = "o";
//                 boxes[6].style = "font-size: 70px; color: black; padding-top: 20%";
//             }
//             else if (computer == 8){
//                 boxes[7].innerHTML = "o";
//                 boxes[7].style = "font-size: 70px; color: black; padding-top: 20%";
//             }
//             else if (computer == 9){
//                 boxes[8].innerHTML = "o";
//                 boxes[8].style = "font-size: 70px; color: black; padding-top: 20%";
//             }
//         });
        
//     }
// });