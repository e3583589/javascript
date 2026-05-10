function showDate() {
  const dateDisplay = document.getElementById("date-display");

  if (dateDisplay.textContent !== "") {
    dateDisplay.textContent = "";
  } else {
    dateDisplay.textContent =
      "Today's date is: " + new Date().toDateString();
  }
}

$(document).ready(function () {
  $("#toggleBio").click(function () {
    $(".bio-text").slideToggle();
  });

  $("#fadePhoto").click(function () {
    $(".profile-image").fadeToggle();
  });
});

