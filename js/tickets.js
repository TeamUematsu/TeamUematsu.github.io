
$(document).ready(function () {
    $("#checkoutBtn").click(function (event) {

        event.preventDefault();

        let concetDate = $("#inputGroupSelect03 option:selected").text();
        let ticketQuantity = $("#quantityInput").val();

        let seatingType = $(".radiobtn:checked").val()
        console.log("click ", concetDate, ticketQuantity,seatingType)



    });
});

