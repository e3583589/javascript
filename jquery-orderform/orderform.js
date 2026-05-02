$(document).ready(function () {

    // Put cursor in name field
    $("#name").focus();

    // Validation functions
    function checkRequired(field, errorField, message) {
        if ($.trim($(field).val()) === "") {
            $(errorField).text(message);
            return false;
        } else {
            $(errorField).text("");
            return true;
        }
    }

    function checkEmail() {
        let email = $("#email").val();
        let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email === "") {
            $("#emailErr").text("Email is required");
            return false;
        } else if (!pattern.test(email)) {
            $("#emailErr").text("Invalid email");
            return false;
        } else {
            $("#emailErr").text("");
            return true;
        }
    }

    function confirmEmail() {
        if ($("#email2").val() !== $("#email").val()) {
            $("#email2Err").text("Emails must match");
            return false;
        } else {
            $("#email2Err").text("");
            return true;
        }
    }

    function checkZip(field, errorField) {
        let zip = $(field).val();

        if (!/^\d{5}$/.test(zip)) {
            $(errorField).text("Zip must be 5 numeric digits");
            return false;
        } else {
            $(errorField).text("");
            return true;
        }
    }

    // Blur validation
    $("#name").blur(function () {
        checkRequired("#name", "#nameErr", "Name required");
    });

    $("#address").blur(function () {
        checkRequired("#address", "#addressErr", "Address required");
    });

    $("#city").blur(function () {
        checkRequired("#city", "#cityErr", "City required");
    });

    $("#shipaddr").blur(function () {
        checkRequired("#shipaddr", "#shipaddrErr", "Shipping address required");
    });

    $("#shipcity").blur(function () {
        checkRequired("#shipcity", "#shipcityErr", "Shipping city required");
    });

    $("#email").blur(checkEmail);
    $("#email2").blur(confirmEmail);

    $("#zip").blur(function () {
        checkZip("#zip", "#zipErr");
    });

    $("#shipzip").blur(function () {
        checkZip("#shipzip", "#shipzipErr");
    });

    // Copy billing to shipping
    $("#copy").change(function () {
        if ($(this).is(":checked")) {
            $("#shipaddr").val($("#address").val());
            $("#shipcity").val($("#city").val());
            $("#shipzip").val($("#zip").val());
            $("#shipstate").val($("#state").val());
        }
    });

    // Quantity calculations
    $(".qty").blur(function () {
        let orderTotal = 0;

        $(".qty").each(function () {
            let qty = $(this).val();
            let id = $(this).attr("id");

            if (isNaN(qty) || qty === "") {
                qty = 0;
                $(this).val(0);
            }

            qty = parseInt(qty);

            let price = parseFloat($("#price" + id).text());
            let total = qty * price;

            $("#total" + id).text(total.toFixed(2));

            orderTotal += total;
        });

        $("#subt").text(orderTotal.toFixed(2));

        // Tax
        let tax = 0;
        if ($("#shipstate").val() === "TX") {
            tax = orderTotal * 0.08;
        }

        $("#tax").text(tax.toFixed(2));

        // Shipping
        let shipping = 10;

        if ($("#shipstate").val() === "TX") {
            shipping = 5;
        } else if ($("#shipstate").val() === "CA" || $("#shipstate").val() === "NY") {
            shipping = 20;
        }

        $("#ship").text(shipping.toFixed(2));

        // Grand Total
        let grandTotal = orderTotal + tax + shipping;

        $("#gTotal").text(grandTotal.toFixed(2));
    });

    // Form submission validation
    $("#order").submit(function (event) {
        let valid = true;

        valid &= checkRequired("#name", "#nameErr", "Name required");
        valid &= checkRequired("#address", "#addressErr", "Address required");
        valid &= checkRequired("#city", "#cityErr", "City required");
        valid &= checkRequired("#shipaddr", "#shipaddrErr", "Shipping address required");
        valid &= checkRequired("#shipcity", "#shipcityErr", "Shipping city required");

        valid &= checkEmail();
        valid &= confirmEmail();

        valid &= checkZip("#zip", "#zipErr");
        valid &= checkZip("#shipzip", "#shipzipErr");

        if (!valid) {
         event.preventDefault();
        } else {
         event.preventDefault();
         window.location.href = "thanks.html";
        }
    });

});