function showDate() {
  document.getElementById("date-display").textContent =
    "Today's date is: " + new Date().toDateString();
}

$(document).ready(function () {
  $("#toggleBio").click(function () {
    $(".bio-text").slideToggle();
  });

  $("#fadePhoto").click(function () {
    $(".profile-image").fadeToggle();
  });
});