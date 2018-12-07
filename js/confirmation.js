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
        $("#userPreferences").append("<h3> You have " + paramArray[1] + " seats in the " + paramArray[2] + " section for the following show: </h3>");
        $("#userPreferences").append("<h3>" + paramArray[0] + "</h3>");
    }
    else {
        $("#userPreferences").append("<h3> You have " + paramArray[1] + " seat in the " + paramArray[2] + " section for the following show: </h3>");
        $("#userPreferences").append("<h3>" + paramArray[0] + "</h3>");
    }
});