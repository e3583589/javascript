let questions = [
    "Who poisoned Snow White?",
    "What made Rapunzel's hair special?",
    "Which princess lost a glass slipper?",
    "Which princess turns into a frog?"
];

let answers = [
    "evil queen",
    "magic flower",
    "cinderella",
    "tiana"
];

function quiz() {

    let points = 0;

    for (let i = 0; i < questions.length; i++) {

        let guesses = 3;

        while (guesses > 0) {

            let userAnswer = prompt(questions[i]);

            // Prevent errors if user clicks Cancel
            if (userAnswer === null) {
                alert("Quiz cancelled.");
                return points;
            }

            if (userAnswer.toLowerCase().trim() === answers[i]) {

                points += guesses;
                alert("Correct! You earned " + guesses + " points.");
                guesses = 0;

            } else {

                guesses--;

                if (guesses > 0) {
                    alert("Wrong! Try again. You have " + guesses + " guesses left.");
                } else {
                    alert("Out of guesses! The correct answer was " + answers[i] + ".");
                }
            }
        }
    }

    return points;
}

let finalScore = quiz();

document.getElementById("score").innerHTML =
    "Your final score is: " + finalScore;