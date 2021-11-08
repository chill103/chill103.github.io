/*
By marking this module as done, I certify that I understand my obligations under UNC Charlotte Policy 407, The Code of Student Academic Integrity (http://legal.uncc.edu/policies/up-407) and that violations of the Code may result in disciplinary proceedings including, but not limited to, failing the course.
 

I also specifically declare that I completed programming this Activity entirely by myself, without help from classmates, friends, and former students. I may have received help from course resources and internet (to see how I can implement a specific concept or for syntax), but I did not receive or view solution of this activity from online, copy solution, or share solution in any form of this Activity with anyone else or in any forum, on- or off-line, and I will not share this solution or other information about this Activity in any way with anyone or on any on- or off-line forum in the future. Please do not ask any questions online about this activity. 
*/

"use strict"

/* Goal: To validate all the inputs and then display them back to the submitter */

/* Validate inputs when the submit button is clicked. */
const $ = selector => document.querySelector(selector);


$("#submit_contact").addEventListener("click", evt =>{

    // local variables, some will be initialized at a later point
    var userName = $("#user_name").value();
    var userEmail = $("#user_email").value();
    var userComment = $("#comment_area").value();
alert($("#user_name").value());
    // Determine if any of the user entered text is empty and display an alert if it is.
    if(userName == ""){
        alert("Please enter a name.");
    }else if(userEmail === ""){
        alert("Please enter an email address.");
    }else if(userComment === ""){
        alert("Please enter a comment.");
    }

    // Determine which radio button was selected and store the result
    if($("#general").checked){
        displayForm(userName, userEmail, "general", userComment)
    }else if($("#complaint").checked){
        displayForm(userName, userEmail, "complaint", userComment)
    }else if($("#request").checked){
        displayForm(userName, userEmail, "request", userComment)
    }else{
        alert("Please choose what type of message you are sending.");
    }
    
})

function displayForm(userName, userEmail, userType, userComment){
    
    // Local variables
    let response = "<h3>Hello " + userName + ".</h3><p>We have your email as " + userEmail + ". ";

    // Custom response based on user type
    if(userType == "general"){
        response += "Thank you for leaving a comment with us! Below we have provided a copy of your comment. We hope to hear from you again!</p><br><p>" + userComment + "</p>";
    }else if(userType == "complaint"){
        response += "Thank you for submitting your complaint to us. We will review it and make contact with you withing the next 10 business days. We have provided a copy of your complaint below.</p><br><p>" + userComment + "</p>";
    }else if(userType == "request"){
        response += "Thank you for submitting your request to us. We will review your request and contact you within two business days to discuss further details. Below you will find a copy of your request.</p><br></p>" + userComment + "</p>";
    }

    // Write to web page
    $("#form_response").value = document.write(response);

    $("#user_name").value = "";
    $("#user_email").value = "";
    $("#user_comment").value = "";
    $("#general").checked = true;
}
