$(document).ready(function () {

    let paramArray = [];

    let searchParams = (location.search.substr(1))
    searchParams = searchParams.replace(/%20/g, ' ').split("&");


    searchParams.forEach(element => {
        let param = element.split("=").pop();
        paramArray.push(param)
    });

    console.log(paramArray)

    if (paramArray[1] > 1) {
        $("#userPreferences").append("<h3> We have reserved " + paramArray[1]+ " seats in the " + paramArray[2]+ " section for the following show: </h3>");
        $("#userPreferences").append("<h3>"+paramArray[0]+"</h3>");
    }
    else {
        $("#userPreferences").append("<h3> We have reserved " + paramArray[1]+ " seat in the " + paramArray[2]+ " section for the following show: </h3>");
        $("#userPreferences").append("<h3>"+paramArray[0]+"</h3>");
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