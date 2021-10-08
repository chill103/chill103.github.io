// JavaScript File for Activity 5 Page
// Charlotte Hill
// Purpose: This file will be used by the Activity 5 webpage to provide basis of getting user information and using it in the webpage.


// Alert Testing Function
function testerDisplay(){
    alert("JavaScript External Script Alert Working");
}


// This variable will store the name of the user after the are prompted to enter their name.
let userName = prompt("Please enter your name.", "Unknown");
// This variable will store the mood of the user after they are prompted to enter it.
let userMood = prompt("How are you today?", "okay");

// Get the users name and mood from the user and the current date and time from the computer. Then display them in a greeting.
const userIntroduction = () =>{
    // Declare local variables
    
    // This variable will be used to get the current time and date.
    let currentDate = new Date();
    // This variable will hold the string of the introduction
    let introductionString;

    // Use the information retrieved from computer to make the time portion of the introduction statement
    introductionString = "Today is " + currentDate.toDateString() + ", and the time is " + currentDate.toLocaleTimeString();

    // Write to the html page
    document.write(introductionString);
    
    // Use the user's name to display a welcome message
    introductionString = "<br>The Captivating Majestic Hummingbird, LLC welcomes you, " + userName + "!";

    // Write to the html page
    document.write(introductionString);

    // Use the user's mood to display a message about it
    introductionString = "<br>We're glad you are doing " + userMood + ".";

    // Write to the html page
    document.write(introductionString);
}

// Display Hummingbird Joke
const hbJoke = () => {
    // Ask the user the question part of the joke. 
    alert("What happens when you give a hummingbird Red Bull?");

    // Once the user has clicked okay, display the answer part of the joke.
    alert("They go back in time!");
}


// Display Hummingbird Fact
const hbFact = () => {
    // Display an interesting fact about the hummingbird for the user
    alert("Hummingbirds are the only birds that can fly backwords!");
}

// Display Hummingbird Addition
const hbAddition = () =>{
    // This variable will store the number of hummingbirds the user sees everyday.
    let userHummingbirdNumber = prompt("How many hummingbirds do you see in one day?", 10);
    // This variable will store the number of other birds the user sees everyday.
    let userOtherBirdNumber = prompt("How many other birds do you see in one day?", 5);
    let totalBirds;

    userHummingbirdNumber = parseInt(userHummingbirdNumber);
    userOtherBirdNumber = parseInt(userOtherBirdNumber);

    totalBirds = userOtherBirdNumber + userHummingbirdNumber;

    alert("You see " + totalBirds + " in one day! That's amazing!!");

}

// Display Hummingbird Wing Multiplication
const hbWingMultiplication = () => {

    // Declare local variables.
    // This variable will store the number of minutes that the user enters from the prompt. It is initialized with the prompt so that the result is stored. A default of 10 minutes will be used for when the user has not entered a number of minutes.
    let userMinutes = prompt("A hummingbird flaps its wings 50 times per second. Enter a number of minutes to find out how may times they will flap their wings in that time!", 10);
    // This variable will hold the calculated number of flaps to display to the user
    let totalFlaps;
    
    // Ensure that the user entered number is an int by parsing it to an int.
    userMinutes = parseInt(userMinutes);

    // Determine if the user has entered an actual number or a string. If it is a number then preform the calcuation to find the number of wing flaps and display it to the user with an alert.
    // If they did not enter a number then display a try again message.
    if(userMinutes !== NaN){

        // Calculate the number of flaps by multiplying the number of minutes by 60 to convert from minutes to the number of seconds and then multiply the total number of seconds by 
        // 50, the number of flaps per second, to get the number of times a hummingbird will flap their wings in that amount of time.
        totalFlaps = 50 * (60 * userMinutes);

        // Display the total number of flaps to the user.
        alert("In " + userMinutes + " minutes, a hummingbird will flap their wings " + totalFlaps + " times!");
    }else{
        alert("Something went wrong! Please try again!");
    }
}

// Display Hummingbird Feeding
const hbFeeding = () =>{

    // Declare local variables
    // This variable will hold the number of hummingbirds the user feeds in a day. It will be initialized with the prompt that will return the user entered number or will default to 15.
    let userBirdNumber = prompt("How many hummingbirds do you feed a day?", 15);
    // This variable will hold the number of hummingbird feeders the user has. It will be initailzied with the prompt that will return the user entered number or will default to 1.
    let userFeederNumber = prompt("How many hummingbird feeders do you have?", 1);
    // This variable will hold the number of feeding spounts on one of the user's feeders. It will be initailzied wit the prompt that will return the user entered number or defaul to 6.
    let userSpoutNumber = prompt("How many feeding spounts are on one of your feeders?", 6);
    // This variable will hold the calculation of the total number of spounts offered by the users feeders.
    let totalSpouts;
    // This variable will hold the number of spouts remaining or the number of birds that do not have a spout.
    let totalFeeding;

    // Parse all of the user entered data into ints
    userBirdNumber = parseInt(userBirdNumber);
    userFeederNumber = parseInt(userFeederNumber);
    userSpoutNumber = parseInt(userSpoutNumber);

    // Determine if any of the user entered numbers were parsed to NaN. If they are send an error message. If not then continue to the calcuations.
    if(userBirdNumber === NaN || userFeederNumber === NaN || userSpoutNumber === NaN){
        alert("We're sorry! Something went wrong. Please try again.");
    }else{
        // Calculate the total number of spouts
        totalSpouts = userSpoutNumber * userFeederNumber;

        // Calculate the total number of birds feeding
        totalFeeding = userBirdNumber - totalSpouts;

        // Determine if the total feeding is negative, a zero, or a positive.
        if(totalFeeding < 0){
            // Alert the user that they have extra spouts for more hummingbirds to feed at
            alert("You have extra spouts! Time to get more hummingbirds in your yard!!");
        }else if(totalFeeding == 0){
            // Alert the user that they have the perfect number of spouts for their hummingbirds
            alert("Perfect!!! You have the exact number of spouts needed to feed the hummingbirds in your yard!");
        }else{
            // Alert the user that they have more hummingbirds than spouts
            alert("Oh No! You still have " + totalFeeding + " hummingbirds that need a feeding spout. Maybe its time to buy more feeders!");
        }
    }


}