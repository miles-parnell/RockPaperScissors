//asigning vars for score
let playerScore = 0;
let compScore = 0;

//computer play function
function compPlay() {
    let num = Math.round(Math.random() * 2);
    if (num === 0) {
        return "Rock";
    } else if (num === 1) {
        return "Paper";
    } else {
        return "Sicssors";
    };
};

//winner function
function playerWins(p, c) {
    if (p === "Rock") {
        if (c === "Sicssors") {
            return true;
        } else {
            return false;
        }
    } else if (p === "Paper") {
        if (c === "Rock") {
            return true;
        } else {
            return false;
        }
    } else if (p === "Sicssors") {
        if (c === "Paper") {
            return true;
        } else {
            return false;
        };
    };
};

//score keeping
$(".box").click(function(){
    let comp = compPlay();
    if($(this).text() === comp){
        $("#player-score").text(playerScore);
        $("#comp-score").text(compScore);
    }
    if(playerWins($(this).text(), comp)){
        playerScore += 1;
        $("#player-score").text(playerScore);
    }else{
        compScore += 1;
        $("#comp-score").text(compScore);
    }
    $("#comp").text(comp);
});

//reset button
$("#new-game").click(function(){
    if(playerScore === compScore){
        alert("it's a tie!");
    }else if(playerScore > compScore){
        alert("you win!!!!!!!");
    }else{
        alert("computer wins :(");
    }
    playerScore = 0;
    compScore = 0;
    $("#comp-score").text(compScore);
    $("#player-score").text(playerScore);
    $("#comp").text("");
});

//mode button selection color
$(".mode").click(function(){
    $(".mode").removeClass("selected");
    $(this).addClass("selected");
});

//comp display text
