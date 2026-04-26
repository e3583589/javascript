$(document).ready(function () {

    console.log("gallery.js is running");

    // THUMBNAILS 
    $("#thumbs img").on("click", function () {

        let newSrc = $(this).attr("src");
        let newAlt = $(this).attr("alt");

        $("#lgPic").attr("src", newSrc);
        $("#lgTitle").text(newAlt);

    });

    // CLICK LARGE IMAGE → open in new window
    $("#lgPic").on("click", function () {
        window.open($(this).attr("src"));
    });

    // HOVER EFFECT 
    $("#thumbs img").hover(
        function () {
            $(this).css({
                "border": "2px solid darkgreen",
                "box-shadow": "0 0 10px darkgreen"
            });
        },
        function () {
            $(this).css({
                "border": "none",
                "box-shadow": "none"
            });
        }
    );

});