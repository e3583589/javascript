//display current date and time

const now = new Date();

const options = { 
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};

// Format date
const date = now.toLocaleDateString(undefined, options);

// Format 12-hour time with AM/PM
const time = now.toLocaleTimeString([], { 
  hour: "numeric", 
  minute: "2-digit",
  hour12: true
});

// Show on the page
document.getElementById("dateTime").textContent =
  `Today is ${date}. It is ${time}.`;


  // Personalized greeting 

function getGreeting() {
    let userName = prompt("Enter your name:");

    // Capitalize first letter
    if (userName && userName.trim() !== "") {
        userName = userName.trim();
        userName = userName.charAt(0).toUpperCase() + userName.slice(1);
    } else {
        userName = "Friend"; // default if blank
    }

    // Get current hour
    const hour = new Date().getHours();
    let greetingText = "";

    // Determine greeting
    switch(true) {
        case (hour < 12):
            greetingText = "Good Morning, " + userName + "!";
            break;
        case (hour < 18):
            greetingText = "Good Afternoon, " + userName + "!";
            break;
        default:
            greetingText = "Good Evening, " + userName + "!";
            break;
    }

    // Show on page
    document.getElementById("greeting").textContent = greetingText;
}

// Run the greeting before the quiz
getGreeting();


// Email validation

function validateEmail() {

    let email = prompt("Enter your email:");

    // Regex pattern for email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {

        let parts = email.split("@");

        let username = parts[0]. toUpperCase();
        let domain = parts[1];

        document.getElementById("emailInfo").textContent =
        "Username: " + username + " | Domain: " + domain;

    } else {

        alert("Invalid email format. Please try again.");
        validateEmail(); // ask again
    }
}

// Run the email check
validateEmail();


// Quote of the day

function showQuote() {

    let quotes = [
        "Dream bigger dreams and don't be the least bit afraid",
        "Courage is the key to an extraordinary life.",
        "Believe in your magic.",
        "It doesn't cost a thing to be kind.",
        "Never stop believing in yourself."
    ];

    let randomIndex = Math.floor(Math.random() * quotes.length);

    document.getElementById("quote").textContent =
    "Quote of the Day: " + quotes[randomIndex];
}

// Run the quote function
showQuote();


  // Princess quiz game

let questions = [
    "Which princess has a pet tiger?",
    "Which disney princess was cursed to sleep for a 100 years?",
    "Which princess lost a glass slipper?",
    "Which princess turns into a frog?"
];

let answers = [
    "jasmine",
    "aurora",
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

// Run the quiz after the date is shown
setTimeout(function() {

    let finalScore = quiz();

    let maxScore = questions.length * 3;
    let percentage = (finalScore / maxScore) * 100;

    document.getElementById("score").textContent =
        "Your final score is: " + finalScore +
        " (" + percentage.toFixed(2) + "%)";

}, 100);