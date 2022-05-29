var clearBtn = document.getElementById("clear");
var highScore = document.querySelector(".highScores");

// clear high scores
clearBtn.addEventListener("click", function(event) {
    localStorage.clear();
});

var finalScore = []; 

var loadScores = function() {
    var initial = localStorage.getItem("initial");
    var timeLeft = localStorage.getItem("timeLeft");

    if (initial !== null) {

            var listItemEl = document.createElement("li");
            listItemEl.textContent = initial + ":" + timeLeft
            highScore.appendChild(listItemEl);

    }
};

loadScores();