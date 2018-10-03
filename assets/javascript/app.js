// Questions
var questions = [
    {
        text: "What color is the sky?",
        options: ["red", "blue", "purple"],
        correctIndex: 1,
    },
    {
        text: "What color is the sky?",
        options: ["red", "blue", "purple"],
        correctIndex: 2,
    },
    {
        text: "What color is the sky?",
        options: ["red", "blue", "purple"],
        correctIndex: 0,
    }
]

// Global Variables
var timer = 0;
var totalGameTime = 5;
var isTimerRunning = false;
var numCorrect = 0;
var numIncorrect = 0;
var numUnanswered = 0;

//Display Instructions and Button
function preGame() {
    var instructionsContent = "blah blah instructions";
    $(".instructions").text(instructionsContent);
    $(".timercontainer").hide();
    $(".questioncontainer").hide();
    $(".results").hide();
    $(".startbutton").click(function (event) {
        $(".instructions").hide();
        $(this).hide();
        startGame();
    })
}


// Start Game function
function startGame() {
    $(".timercontainer").show();
    $(".questioncontainer").show();
    // Start Timer
    startTimer();
    // Display questions
    displayQuestions();

    // Include Submit button
     // Click submit
    $(".submitbutton").click(function(event){
        endGame();
    });
   
    // end game

}

function displayQuestions() {
    for (var i = 0; i < questions.length; i++) {
        var questionText = $("<p>");
        questionText.text(questions[i].text);
        $(".questions").append(questionText);
        // Display options as buttons
        for (var j = 0; j < questions[i].options.length; j++) {
            var optionButton = $("<br><input type = 'radio' name =" + i + ">" + questions[i].options[j] + "</input>");
            $(questionText).append(optionButton);
        }
        
    }
    // if ($(".restartbutton").click(function(){
    //     $(".questions").empty();
    //     console.log("reset");
    // }));
}

function startTimer(isTimerRunning) {
    if (!isTimerRunning) {
        isTimerRunning = true;
        timer = setInterval(function () {
            $(".timercountdown").text(totalGameTime);
            totalGameTime--;
            if (totalGameTime < 0) {
                isTimerRunning = false;
                clearInterval(timer);
                totalGameTime = 5;
                endGame();
            }
        }, 1000);
    }

}

function resetTimer() {

}

// End Game function
function endGame() {
    $(".timercontainer").hide();
    $(".questioncontainer").hide();
    $(".results").show();
        $("#correct").text("Correct : " + numCorrect);
        $("#incorrect").text("Incorrect : " + numIncorrect);
        $("#unanswered").text("Unanswered : " + numUnanswered);

    // Display correct, incorrect, unanswered 

    // Restart game (try again), same as start game? call start game function again
    $(".restartbutton").click(function () {
        $(".instructions").show();
        $(".startbutton").show();
        preGame();
    })
}






$(document).ready(function () {
    preGame();


    console.log("this");
});