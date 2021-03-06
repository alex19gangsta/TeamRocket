'use strict'

window.onload = start;  // On window load launch function start

function start() {

    var accountform = document.getElementById('form');  // On form submit launch function verifyImput
    accountform.onsubmit = verifyImput;  // On form submit launch function verifyImput
}

function verifyImput() {

    /************************************ Get the value of fields ************************************/

    let MatchDate = document.getElementById('Date').value;  // Get the value of the field
    let MatchHour = document.getElementById('Hours').value;    // Get the value of the field
   
    /******************** Get the location where the error message will be writen ********************/

    let errorField = document.querySelector('.errorField');    // Get the location where the error message will be writen 

    /********************************** Validation and error message *********************************/

    let process = false;    // The process variable for validation
    let message = "";   // The variable for error message

    /************************************ Match validation code **************************************/

    if (MatchDate == ''  || MatchHour == '' ) {    // if the field is empty (Value property empty)

        message = "Veuillez remplir les champs avec *";  // Create an error message
        errorField.innerHTML = message;    // write the message on html

    } else {

        message = " ";  // To delete error Message
        errorField.innerHTML = message;    // delete the message on html
        process = true
    }
    return process
}