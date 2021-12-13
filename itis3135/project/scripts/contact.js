$(document).ready(function() {
// Set the selector
const $ = selector => document.querySelector(selector);

$("#submit").addEventListener("click", () => {

    // Determine if the user has not entered any thing in the text areas or selected a category
    if($("#user_name").value ==""){
        alert("Please enter your name.");   
    }else if($("#email_address").value == ""){
        alert("Please enter your email address.");  
    }else if($("#category").value == ""){
        alert("Please select a category for your contact.");  
    }else if($("#content").value == ""){
        if($("#category.value").value != "Join Email List"){
            alert("Please enter your comment or complaint.");  
        }else{
            // Go to function that will insert the message into the page
            displayMessage();
        }
        
    }else{
        // Go to function that will insert the message into the page
        displayMessage();
    }


    
})

const displayMessage = () => {
    
    
    // Determine what kind of message will be sent
    if($("#category").value == "Join Email List"){
        
        // Send a message to the user thanking them for joining
        alert("Thank you for joining our email list! You will hear from us soon!");        
    
    }else if($("#category").value == "Comment"){
        
        // Send a message to the user thanking them for their comment
        alert("Thank you for your comment! We love to hear from all of you.");

    }else{
        
        // Send a message to the user about their complaint
        alert("We are sorry you had a complaint. We will review your complaint as soon as possible.");

    }

}

$("#reset").addEventListener("click", () => {
    $("#user_name").value = "";
    $("#email_address").value = "";
    $("#category").value = "";
    $("#content").value = "";
    $("#user_name").focus();
})

});