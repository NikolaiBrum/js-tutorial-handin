'use strict';

let $ = (x) => {
    return document.getElementById(x);
}

let arr = [];


const rollIt = (min, max) => {
    let calc = max - min + 1;
    let rando = Math.random() * calc;
    let final = Math.floor(rando) + min;
    return final;
}

const roll = () => {
    return $("roll").innerHTML = rollIt(1, 10);
}

let addToArr = () => {
    arr.push($("roll").innerHTML);
}

let winner = () => {
    if($("player1Points").innerHTML == 3){
        alert("Player 1 WINS!");
        newGame();
    }
    else if($("player2Points").innerHTML == 3){
        alert("Player 2 WINS!");
        newGame();
    }
}

let newGame = () => {
    $("player1Points").innerHTML = 0;
    $("player2Points").innerHTML = 0;
    $("roll").innerHTML = "Roll Me!";
    arr = [];
}

let player1Turn = () => {
    if ($("player1High").checked) {

        if (arr[arr.length - 1] > arr[arr.length - 2]) {
            console.log("correct");
            $("player1Points").innerHTML++;
        } else {
            console.log("false");
        }
    }
    if ($("player1Low").checked) {
        if (arr[arr.length - 1] < arr[arr.length - 2]) {
            console.log("correct");
            $("player1Points").innerHTML++;
        } else {
            console.log("false");
        }
    }
    $("player1Low").checked = false;
    $("player1High").checked = false;
}

let player2Turn = () => {
    if ($("player2High").checked) {

        if (arr[arr.length - 1] > arr[arr.length - 2]) {
            console.log("correct");
            $("player2Points").innerHTML++;
        } else {
            console.log("false");
        }
    }
    if ($("player2Low").checked) {
        if (arr[arr.length - 1] < arr[arr.length - 2]) {
            console.log("correct");
            $("player2Points").innerHTML++;
        } else {
            console.log("false");
        }
    }
    $("player2Low").checked = false;
    $("player2High").checked = false;
}


$("rollBtn").addEventListener('click', () => {
    roll();
    addToArr();
    player1Turn();
    player2Turn();
    winner();
});
