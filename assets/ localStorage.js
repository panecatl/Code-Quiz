var clearBtn = document.getElementById("clear");
var highScore = document.querySelector("highScores");

// clear high scores
clearBtn.addEventListener("click", function(event) {
    localStorage.clear();
});

var finalScore = []; 

var loadScores = function names() {
    var finalScore = localStorage.getItem("contactInfo", "timeLeft");
    if (finalScore !== null) {
        for (var i = 0; i < finalScore.length; i++) {
            var listItemEl = document.createElement("li");
            listItemEl.textContent = allScores[i]
            highScore.appendChild(createLi);
        }
    }
};

