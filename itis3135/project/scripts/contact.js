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
    alert("taco");
    // Create a new div tag
    /*const div = document.createElement("div");
    div.classList.add("contact_details");

    // Create the h3 tag and its content, then attach it to the div
    const h3 = document.createElement("h3");
    const h3Text = document.createTextNode("Message");
    h3.appendChild(h3Text);
    div.appendChild(h3);

    // Create the p tag and its content variable
    const p = document.createElement("p");
    const pText;

    // Determine what kind of message will be sent
    if($("#category").value == "Join Email List"){
        
        // Add content to the message text
        pText = document.createTextNode("Message");
        
    
    }else if($("#category").value == "Comment"){
        
        // Add content to the message text
        pText = document.createTextNode("help");

    }else{
        
        // Add content to the message text
        pText = document.createTextNode("here");

    }

    // Attach the message to the p variable and then attach to the p variable to the div
    p.appendChild(pText);
    div.appendChild(p);

    // Add the div tag to the page
    const node = $("div");
    if(node == null){
        const form = $("form");
        form.parentNode.insertBefore(div, form);
    }else{
        node.parentNode.replaceChild(div, node);
    }
*/
}

$("#reset").addEventListener("click", () => {
    $("#user_name").value = "";
    $("#email_address").value = "";
    $("#category").value = "";
    $("#content").value = "";
    $("#user_name").focus();
})

});