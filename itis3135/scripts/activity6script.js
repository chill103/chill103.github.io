/* Charlotte Hill
 Activity #6 - Name the Polygon: JavaScript File
 Purpose: This file will hold all of the JavaScript code that will be used
 to prompt the user to enter a number and then validate that number.
 If the number is validated, then it will alert the user to the kind of 
 polygon has the same number of sides as the number that was entered.

 Code of Authentication:
 I, Charlotte Hill, Have not copied and pasted code into these pages. I have not gotten help from any person or from any site. I have gotten help from the book to verify any JavaScript coding structures or statements.
 Signed: Charlotte Hill - October 3, 2021 at 11:03 PM.
*/

// To ensure that any accedential redeclarations of variables are caught.
"using strict"

// Indicator variable to end the prompt system
let flagNum = 0; 


let userNumber; 
    
// Do while loop to prompt the user and validate until they are done
do{
    
    // Ask the user to enter a number between 0 and 10.
    userNumber = prompt("The Captivating Hummingbird asks that you enter a number between 1 and 10 for the number of sides in your polygon.", 5);

    // Determine if the user has entered a valid number
    if(validateEntry() == true){
        
        getShape();

        flagNum = 1;
    }

}while(flagNum == 0);

// This function will validate the users entry by determining if a number was entered and if so, if it was a valid number.
function validateEntry ()  {
    
    // Parse the number received from the user to an int to ensure that the number is a whole number or NaN.
    userNumber = parseInt(userNumber);

    // Determine if the user entry is not a number or is over 10.
    if(isNaN(userNumber)){
        
        // Call the function to prompt the user to enter a number. Pass a string explaining that a number was not entered and asking them to enter a number.
        userValidationOutput("We're sorry but your entry is not a number. The Captivating Hummingbird asks that you enter a number between 1 and 10. Please do not write the number as a word.");
        return false;

    // Determine if the user entry is a number greater than 10.
    }else if(userNumber > 10){
        
        // Call the function to prompt the user to enter a new number. Pass a string explaining that the user's entry was too high and asking for a new number between 0 and 10.
        userValidationOutput("We're sorry but your entry is too high. The Captivating Hummingbird asks that you enter a number between 1 and 10.");
        return false;

    // Determine if the user entry is zero.
    }else if(userNumber == 0){
    
        // Call the function to prompt the user to enter a new number. Pass a string explaining that the user's entry was zero and to enter a new number.
        userValidationOutput("We're sorry but there is no polygon with zero sides. The Captivating Hummingbird asks that you enter a number between 1 and 10.")
        return false;

    // The number is not a word and is less than or equal to 10.
    }else{

        // If the number is less than zero then find the absolute value of it to change it from a negative to a positive.
        if(userNumber < 0){

            // I looked up how to do this in the book on page 362.
           userNumber = Math.abs(userNumber);
        }

        return true;
    }
}

// This function will output to the user if the validation of the entry fails. A string containing the message to the user is passed to the function.
function userValidationOutput(promptResponse) {

    // Prompt the user using the passed in string to tell them why the entry failed and to enter a new number.
    alert(promptResponse);

}

// This function will determine what kind of polygon has the number of sides that the user entered.
function getShape() {

    // This variable will hold the string value of the numbers cooresponding polygon
    var polyName;

    // This switch statement will be used to determine which number was entered and its cooresponding polygon.
    switch (userNumber){
        case 1:
            polyName = "henagon";
            break;
        case 2: 
            polyName = "digon";
            break;
        case 3:
            polyName = "trigon";
            break;
        case 4:
            polyName = "tetragon";
            break;
        case 5:
            polyName = "pentagon";
            break;
        case 6:
            polyName = "hexagon";
            break;
        case 7:
            polyName = "heptagon";
            break;
        case 8:
            polyName = "octagon";
            break;
        case 9:
            polyName = "enneagon";
            break;
        case 10: 
            polyName = "decagon";
            break;
        default:
            polyName = "an error occurred";
            break;
    }

    // Output the polygon to the user with an alert.
    alert("For " + userNumber + " sides, the cooresponding polygon is " + polyName + ".");
}