var timeHS = document.getElementById("time-hs");
var startQuiz = document.getElementById("startQuiz")
var quiz = document.getElementById("quiz");
var question = document.getElementById("quizQuestions")
var choices = document.getElementById("answers");
var choice1 = document.getElementById("1");
var choice2 = document.getElementById("2");
var choice3 = document.getElementById("3");
var choice4 = document.getElementById("4");
var finalScore = document.getElementById("finalScore");
var endResult = document.getElementById("allDone");
var result = document.getElementById("result");
var scoreList = document.getElementById("scoreList");


var questions = [
    {question: "Which are data types?",
    choice1 : "Numbers",
    choice2 : "Booleans",
    choice3 : "Strings",
    choice4 : "All of the above",
    correct: "4"
    },
    {question: "What are the two different types of scope?",
    choice1 : "Global",
    choice2 : "Local",
    choice3 : "Worldwide",
    choice4 : "answers 1 & 2",
    correct: "4"
    },
    {question: "What can we write in our code to print something into the console?",
    choice1 : "console.log",
    choice2 : "debuger",
    choice3 : "else if",
    choice4 : "none of the above",
    corect: "1"
    }, 
    {question: "What does DOM stand for?",
    choice1 : "Data Object Machine",
    choice2 : "Dear Over Me",
    choice3 : "Document Object Model",
    choice4 : "Dogs On Moon",
    correct: "3"
    },
    {question: "What do you use to manipulate websites html?",
    choice1 : "getElementById",
    choice2 : "innerHTML",
    choice3 : "debugger",
    choice4 : "querySelector",
    correct: "2"},
]

// hiding these id tags
startQuiz.style.display = "block";
quiz.style.display = "none";
finalScore.style.display = "none";

// button to start quiz
var startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", startGame);


// timer 
var timeLeft = 70;
var startScore = 0;
var timer = document.getElementById("timer");


// how it displays on the screen
timer.textContent = "time: " + startScore + "s";

// quiz function
function startGame() {
    quiz.style.display = "block"; 
    question.style.display = "block";
    timeHS.style.display = "block"; 
    startQuiz.style.display = "none";
    finalScore.style.display = "none";

    // timer
    var timeInterval = setInterval(function() {
        timer.textContent = "time:" +timeLeft + "s";
        timeLeft-=1;

        if(timeLeft === 0 || questions.length === runningQuestionIndex+1) {
            resultRender();
            clearInterval(timeInterval);
            timer.textContent = "Time:" + timeLeft + "s";
        }
    }, 1000); 

    renderQuestion();
};

// questions
var lastQuestionIndez = questions.length -1;
var runningQuestionIndex = 0;

function renderQuestion() {
    var ques = questions[runningQuestionIndex];
    question.innerHTML = ques.question;
    choice1.innerHTML = ques.choice1;
    choice2.innerHTML = ques.choice2;
    choice3.innerHTML = ques.choice3;
    choice4.innerHTML = ques.choice4;
};

// answer check
function checkAnswer(answer) {
    if(questions[runningQuestionIndex].correct == answer) {
        response.textContent = "Correct!"
    } else {
        response.textContent = "Wrong!";
        timeLeft -=10;
    }
    // if player finishes all of the questions
    if (questions.length === runningQuestionIndex+1) {
        resultRender();
        return;
    }
    runningQuestionIndex++;
    renderQuestion();
};

// score
function resultRender() {
    quiz.style.display = "none";
    startQuiz.style.display = "none";
    finalScore.style.display = "block";

    if (timeLeft === 0 || questions.length -1) {
        result.textContent = "Your final score is " + timeLeft + ".";
    }
}; 
// local storage
var initial = document.querySelector("contactInfo");

userInfo.addEventListener("click", function(event) {
    var user = {
        userName: contactInfo.value.trim()
    };

    localStorage.setItem("user", JSON.stringify(user));

    localStorage.getItem("user", JSON.parse(user));
});

