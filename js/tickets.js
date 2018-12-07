
$(document).ready(function () {
    $("#checkoutBtn").click(function (event) {

        event.preventDefault();



        let concetDate = $("#inputGroupSelect03 option:selected").text();
        let ticketQuantity = $("#quantityInput").val();
        let seatingType = $(".radiobtn:checked").val()

        console.log("click ", concetDate, ticketQuantity, seatingType)

        if (concetDate != "Select shows" && ticketQuantity > 0 && seatingType != undefined) {
            window.location.href = "checkout.html?param=" + concetDate + "&param2=" + ticketQuantity + "&param3=" + seatingType;
        }

        else {

            alert("Make sure you have selected a show, number of tickets and seating.")

        }



    });
});

