
$(document).ready(function () {
    $("#checkoutBtn").click(function (event) {

        event.preventDefault();

        

        let concetDate = $("#inputGroupSelect03 option:selected").text();
        let ticketQuantity = $("#quantityInput").val();
        let seatingType = $(".radiobtn:checked").val()

        console.log("click ", concetDate, ticketQuantity,seatingType)

        // I already made the form so the script gets all the values that you can use to render the next section



    });
});

