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
    var instructionsContent = "Each highlight must have it's own private shadow. You have to make those little noises or it won't work. The only prerequisite is that it makes you happy. If it makes you happy then it's good. We spend so much of our life looking - but never seeing. Imagination is the key to painting. If these lines aren't straight, your water's going to run right out of your painting and get your floor wet.";
    $(".instructions").text(instructionsContent);
    $(".timercontainer").hide();
    $(".questioncontainer").hide();
    $(".results").hide();

};



// Start Game function
function startGame() {
    totalGameTime = 5;
    $(".timercontainer").show();
    $(".questioncontainer").show();
    // Start Timer
    startTimer();
    // Display questions
    $(".questions").empty();
    displayQuestions();

    // Include Submit button
    // Click submit


    // end game

}

function displayQuestions() {
    for (var i = 0; i < questions.length; i++) {
        var questionText = $("<p>");
        questionText.text(questions[i].text);
        $(".questions").append(questionText);
        // Display options as buttons
        for (var j = 0; j < questions[i].options.length; j++) {
            var optionButton = $("<br><input type = 'radio' value = " + j + " name =" + i + ">" + questions[i].options[j] + "</input>");
            // $(optionButton).val([j]);
            $(questionText).append(optionButton);
        }

    }
    // if ($(".restartbutton").click(function(){
    //     $(".questions").empty();
    //     console.log("reset");
    // }));
}

function startTimer(isTimerRunning) {
    timer = setInterval(function () {
        $(".timercountdown").text(totalGameTime);
        totalGameTime--;
        if (totalGameTime < 0) {

            // totalGameTime = 5;
            endGame();
        }
    }, 1000);
}



function resetTimer() {

}

// End Game function
function endGame() {
    $(".timercontainer").hide();
    $(".questioncontainer").hide();
    $(".results").show();
    clearInterval(timer);
    $("#correct").text("Correct : " + numCorrect);
    $("#incorrect").text("Incorrect : " + numIncorrect);
    $("#unanswered").text("Unanswered : " + numUnanswered);

    // Display correct, incorrect, unanswered 

    // Restart game (try again), same as start game? call start game function again
}






$(document).ready(function () {
    preGame();
    $(".startbutton").click(function (event) {
        $(".instructions").hide();
        $(this).hide();
        startGame();
    });

    $(".submitbutton").click(function (event) {
        endGame();
    });

    $(".restartbutton").click(function () {
        $(".instructions").show();
        $(".startbutton").show();
        preGame();
    });

    console.log("this");
});