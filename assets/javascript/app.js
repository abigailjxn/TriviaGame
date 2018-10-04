// Questions
var questions = [
    {
        text: "Who was Princess Zelda named after?",
        options: ["Zelda Williams", "Zelda Fitzgerald", "Zelda Spellman", "No one, the creators simply liked the name"],
        correctIndex: 2,
    },
    {
        text: "Who has been the main composer for the music in the Legend of Zelda franchise?",
        options: ["Nobuo Uematsu", "Junichi Masuda", "Yoko Shimamura", "Koji Kondo"],
        correctIndex: 3,
    },
    {
        text: "What benefits does the Bunny Hood have in Ocarina of Time?",
        options: ["Makes Link run faster", "Allows Link to hear animals thoughts", "Nothing, it's a part of a trading game", "There is no Bunny Hood in Ocarina of Time"],
        correctIndex: 2,
    },
    {
        text: "In Majora's Mask, what mask do you get on the Moon before facing Majora?",
        options: ["Fierce Diety Mask", "Majora's Mask", "Hero's Mask", "Captain's Hat"],
        correctIndex: 0,
    },
    {
        text: "Who is Link's main companion in Skyward Sword?",
        options: ["Zelda", "Fi", "Navi", "Midna"],
        correctIndex: 1,
    },
    {
        text: "What title was part of the now notorious Philips CD-i games that are not considered Zelda canon?",
        options: ["Zelda: The Wand of Gamelon", "The Adventure of Link", "Four Swords", "Oracle of Seasons"],
        correctIndex: 0,
    },
    {
        text: "Link isn't left-handed in Breath of the Wild and which other game?",
        options: ["A Link to the Past", "The Legend of Zelda (NES)", "Wind Waker", "Skyward Sword"],
        correctIndex: 3,
    }
]

// Global Variables
var timer = 0;
var totalGameTime = 120;
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
    totalGameTime = 120;
    $(".timercontainer").show();
    $(".questioncontainer").show();
    // Start Timer
    startTimer();
    // Display questions
    $(".questions").empty();
    displayQuestions();


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
            $(questionText).append(optionButton);
        }

    }
}

function startTimer(isTimerRunning) {
    timer = setInterval(function () {
        $(".timercountdown").text(totalGameTime);
        totalGameTime--;
        if (totalGameTime < 0) {
            endGame();
        }
    }, 1000);
}



function resetTimer() {

}

 // Display correct, incorrect, unanswered 
function displayResults() {
    $("#correct").text("Correct : " + numCorrect);
    $("#incorrect").text("Incorrect : " + numIncorrect);
    $("#unanswered").text("Unanswered : " + numUnanswered);
}

// End Game function
function endGame() {
    $(".timercontainer").hide();
    $(".questioncontainer").hide();
    $(".results").show();
    clearInterval(timer);
    displayResults();

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