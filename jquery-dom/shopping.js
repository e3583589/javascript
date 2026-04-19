$(document).ready(function () {

    // 🛒 item counter
    let itemCount = 0;

    // ❌ remove button
    let deleteBtn = "<span class='del'>Remove</span>";

    // Add to cart
    $(".add").click(function () {

        itemCount++;

        if (itemCount > 0) {
            $("#empty").hide();
        }

        let itemName = $(this).attr("name");
        let itemID = $(this).attr("id");

        let cartItem = "<li class='cartItem' name='" + itemID + "'>" 
                        + itemName + " " + deleteBtn + "</li>";

        $("#cart").append(cartItem);

        $(this).hide();
    });

    // Remove from cart
    $("#cart").on("click", ".del", function () {

        let parentItem = $(this).parent();
        let itemID = parentItem.attr("name");

        parentItem.remove();

        itemCount--;

        if (itemCount === 0) {
            $("#empty").show();
        }

        $("#" + itemID).show();
    });

    // Star rating
    $(".rating img").click(function () {

        $(this).siblings("img").attr("src", "staroff.gif");

        $(this).attr("src", "staron.gif");

        $(this).prevAll("img").attr("src", "staron.gif");

        $(this).nextAll("img").attr("src", "staroff.gif");
    });

});