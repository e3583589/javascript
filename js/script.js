// Ask the visitor for their name
let visitorName = prompt("Welcome! What is your name?");

// If the visitor enters a name
if (visitorName) {
  alert("Hello " + visitorName + "! Welcome to my homepage.");

  // Display the name on the page
  document.getElementById("welcome-message").textContent =
    "Nice to meet you, " + visitorName + "!";
}
