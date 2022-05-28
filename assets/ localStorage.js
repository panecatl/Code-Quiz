var clearBtn = document.getElementById("clear");

// clear high scores
clearBtn.addEventListener("click", function(event) {
    localStorage.clear();
});

var finalScore = []; 

var loadScores = function names() {
    var finalScore = localStorage.getItem("contactInfo", "timeLeft");
    if (!finalScore) {
        return false;
    }

    for (1 = 0; i < finalScore.length, i++) {
        var finalScore = finalScore[i];
        var listItemEl = document.createElement("li");
        listItemEl.textContent = finalScore;
    }
    finalScore.push(finalScore)
};