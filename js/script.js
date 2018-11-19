// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var userChoice;
userChoice="";
var computerChoice;
computerChoice="";
var winner;
winner="";
var randomNumber;

randomNumber=0;
$("#shoot").click(function(){
    userChoice=$("#input").val();
    $("#userChoice").text(userChoice);
    randomNumber=Math.random();
    if (randomNumber<.3333333333333333333333){
        computerChoice="Rock";
    }
    else if(randomNumber < .6666666666667){
        computerChoice="Scissors";
    }
    else{
        computerChoice="Paper";
    }
    computerChoice
});

// DOCUMENT READY FUNCTION BELOW

