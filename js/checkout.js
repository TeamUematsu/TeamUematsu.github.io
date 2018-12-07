$(document).ready(function () {

    let paramArray = [];

    let searchParams = (location.search.substr(1))
    searchParams = searchParams.replace(/%20/g, ' ').split("&");


    searchParams.forEach(element => {
        let param = element.split("=").pop();
        paramArray.push(param)
    });

    let concetDate = paramArray[0]
    let seatingType = paramArray[2]
    let ticketQuantity = paramArray[1]

    console.log("paramArray", concetDate, seatingType, ticketQuantity)

    if (paramArray[1] > 1) {
        $("#userPreferences").append("<h3> We have reserved " + paramArray[1] + " seats in the " + paramArray[2] + " section for the following show: </h3>");
        $("#userPreferences").append("<h3>" + paramArray[0] + "</h3>");
    }
    else {
        $("#userPreferences").append("<h3> We have reserved " + paramArray[1] + " seat in the " + paramArray[2] + " section for the following show: </h3>");
        $("#userPreferences").append("<h3>" + paramArray[0] + "</h3>");
    }

    $("#purchaseBtn").click(function (event) {

        event.preventDefault();

        let MailingName = $("#mailName").val();
        let MailingCity = $("#mailCity").val();
        let MailingAddress1 = $("#mailAddress1").val();
        let MailingAddress2 = $("#mailAddress2").val();
        let MailingState = $("#mailState").val();
        let MailingZipCode = $("#mailZipcode").val();
        let MailingPhoneNumber = $("#mailPhoneNumber").val();
        let MailingEmail = $("#mailEmail").val()

        let BillingName = $("#billName").val();
        let BillingCity = $("#billCity").val();
        let BillingAddress1 = $("#billAddress1").val();
        let BillingAddress2 = $("#billAddress2").val();
        let BillingState = $("#billState").val();
        let BillingZipCode = $("#billZipcode").val();
        let BillingPhoneNumber = $("#billPhoneNumber").val();
        let BillingEmail = $("#billEmail").val()

        let CreditCardNumber = $("#ccNumber").val();
        let CreditCardExpiration = $("#ccExpiration").val();
        let CreditCardSecurityCode = $("#securityCode").val();

        let infoArray = [MailingName, MailingCity, MailingAddress1, MailingAddress2, MailingState, MailingZipCode, MailingPhoneNumber, MailingEmail,
            BillingName, BillingCity, BillingAddress1, BillingAddress2, BillingState, BillingZipCode, BillingPhoneNumber, BillingEmail, CreditCardNumber,
            CreditCardExpiration, CreditCardSecurityCode]

        console.log(infoArray)

        let errorTrigger = 0
        console.log(errorTrigger)

        infoArray.forEach(element => {

            if (element.length == 0) {
                errorTrigger = 1
                return
            }
        });

       
        if(errorTrigger ==0){
            window.location.href = "confirmation.html?param=" + concetDate + "&param2=" + ticketQuantity + "&param3=" + seatingType;
        }
        else{
            alert("Make sure you fill out all required fields.")
        }

    });

});