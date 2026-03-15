// question counter
var count = 0;

/* Question multi-dimensional array */
var questions = [
["What color is the sky?", 0, "Blue", "Green", "Red"],
["How many days are in a week?", 1, "5", "7", "10"],
["Which animal barks?", 2, "Cat", "Cow", "Dog"]
];

// show Play Game button when page loads
document.getElementById("prompt").innerHTML =
"<button onclick='playGame()'>Play Game</button>";

function playGame() {

var question = questions.shift();

var questionText = question.shift();
var correctIndex = question.shift();

document.getElementById("question").innerHTML = questionText;

var answersHTML = "";

for (var i = 0; i < question.length; i++) {

answersHTML += "<li><a href='#' onclick='checkAnswer(" + i + "," + correctIndex + ")'>" 
+ question[i] + "</a></li>";

}

document.getElementById("answers").innerHTML = answersHTML;

document.getElementById("prompt").innerHTML =
"Click the best answer.";

}

function checkAnswer(choice, correct) {

if (choice == correct) {

document.getElementById("prompt").innerHTML =
"<span class='success'>Correct!</span>";

}
else {

document.getElementById("prompt").innerHTML =
"<span class='error'>Incorrect!</span>";

}

count++;

if (count >= 3) {

document.getElementById("prompt").innerHTML +=
"<br><button onclick='location.reload()'>Restart Game</button>";

}
else {

document.getElementById("prompt").innerHTML +=
"<br><button onclick='playGame()'>Next Question</button>";

}

}