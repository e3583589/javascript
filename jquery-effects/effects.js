$(document).ready(function () {

    $("#newsSignup").hide();

    $("#signuplink").click(function (e) {
        e.preventDefault();

        $("#newsSignup").slideToggle();

        let symbol = $("#openclose").text();

        if (symbol === "+") {
            $("#openclose").text("-");
        } else {
            $("#openclose").text("+");
        }
    });

    $("#slogan").hover(
        function () {
            $(this).fadeOut("normal", "linear", function () {
                $(this).text("Hand Picked Just for You")
                       .fadeIn("slow", "swing");
            });
        },
        function () {
            $(this).fadeOut("fast", "swing", function () {
                $(this).text("The Power of Flowers")
                       .fadeIn("slow", "linear");
            });
        }
    );

    $("#rose").animate({
        right: "100px",
        opacity: 1
    }, "slow", "swing");

    $("#newsSignup").submit(function (e) {
        e.preventDefault();

        alert("Thank you for registering");

        $("#newsSignup").slideUp();

        $("#signuplink").fadeTo("slow", 0.3);
    });

});