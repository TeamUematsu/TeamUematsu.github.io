$(document).ready(function () {
    $("#checkoutBtn").click(function (event) {

        event.preventDefault();

        let concertDate = $("#inputGroupSelect03 option:selected").text();
        let ticketQuantity = $("#quantityInput").val();

        let seatingType = $(".radiobtn:checked").val()
        console.log("click ", concertDate, ticketQuantity,seatingType)



    });

    $("#purchaseBtn").click(function (event) {

        event.preventDefault();

        let MailingName = $("#mailName").val();
        let MailingCity = $("#mailCity").val();
        let MailingAddress1 = $("#mailAddress1").val();
        let MailingAddress2 = $("#mailAddress2").val();
        let MailingState = $("#mailState").val();
        let MailingZipCode = $("#mailZipcode").val();
        let MailingPhoneNumber = $("#mailPhoneNumber").val();

        let BillingName = $("#billName").val();
        let BillingCity = $("#billCity").val();
        let BillingAddress1 = $("#billAddress1").val();
        let BillingAddress2 = $("#billAddress2").val();
        let BillingState = $("#billState").val();
        let BillingZipCode = $("#billZipcode").val();
        let BillingPhoneNumber = $("#billPhoneNumber").val();

        let CreditCardNumber = $("#ccNumber").val();
        let CreditCardExpiration = $("#ccExpiration").val();
        let CreditCardSecurityCode = $("#securityCode").val();

        console.log("click ", MailingName, MailingCity, MailingAddress1, MailingAddress2, MailingState, MailingZipCode, MailingPhoneNumber,
        	BillingName, BillingCity, BillingAddress1, BillingAddress2, BillingState, BillingZipCode, BillingPhoneNumber, CreditCardNumber,
        	CreditCardExpiration, CreditCardSecurityCode)



    });
});