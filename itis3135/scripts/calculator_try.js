/*
    Calculator Try
    Charlotte Hill

    Academic Integrity of Assignment Statement
    I, Charlotte Hill, have not copied and pasted code into these pages. I have gotten help from no person. I have gotten help from this site:
    https://www.w3schools.com/js/js_break.asp
    Used to ensure that break and continue are used in JavaScript just like they are in Java.

    Charlotte M. Hill 
    10/10/2021 9:18 pm
*/

"use strict"

// Global sum variable and global string variables for the display value and the current operation
var total = 0;
var userEnteredNumbers = [];
var currentIndex = 0;
var currentUserNumber = "";

const $ = selector => document.querySelector(selector);

$("#btnClear").addEventListener("click", evt => {
        
    $("#display").value = 0;
    currentUserNumber ="";
    currentIndex = 0;
    userEnteredNumbers = [];

})

$("#btnEnter").addEventListener("click", evt => {
    
    // Determine if the last element in the array is one of the operations. If so then decrement the current index. If not, add the currentUserNumber to the array.
    if(userEnteredNumbers[currentIndex - 1] == "add" || userEnteredNumbers[currentIndex - 1] == "subtract" || userEnteredNumbers[currentIndex - 1] == "multiply" || userEnteredNumbers[currentIndex - 1] == "divide"){
        currentIndex--;
    }else{
        userEnteredNumbers[currentIndex] = currentUserNumber;
    }
    
    evaluationUserInput();

})

$("#btnPlus").addEventListener("click", evt => {
    
    userEnteredNumbers[currentIndex] = currentUserNumber;
    userEnteredNumbers[currentIndex + 1] = "add";
    currentIndex += 2;
    currentUserNumber = "";
    
})

$("#btnSubtract").addEventListener("click", evt => {
        
    userEnteredNumbers[currentIndex] = currentUserNumber;
    userEnteredNumbers[currentIndex + 1] = "subtract";
    currentIndex += 2;
    currentUserNumber = "";
})
    
$("#btnDivide").addEventListener("click", evt => {
        
    userEnteredNumbers[currentIndex] = currentUserNumber;
    userEnteredNumbers[currentIndex + 1] = "divide";
    currentIndex += 2;
    currentUserNumber = "";

})

$("#btnMultiply").addEventListener("click", evt => {
        
    userEnteredNumbers[currentIndex] = currentUserNumber;
    userEnteredNumbers[currentIndex + 1] = "multiply";
    currentIndex += 2;
    currentUserNumber = "";

})

$("#btnOne").addEventListener("click", evt => {
        
    currentUserNumber += "1";
    $("#display").value = currentUserNumber;

})
    
$("#btnTwo").addEventListener("click", evt => {

    currentUserNumber += "2";
    $("#display").value = currentUserNumber;

})

$("#btnThree").addEventListener("click", evt => {

    currentUserNumber += "3";
    $("#display").value = currentUserNumber;

})

$("#btnFour").addEventListener("click", evt => {

    currentUserNumber += "4";
    $("#display").value = currentUserNumber;

})

$("#btnFive").addEventListener("click", evt => {

    currentUserNumber += "5";
    $("#display").value = currentUserNumber;

})

$("#btnSix").addEventListener("click", evt => {

    currentUserNumber += "6";
    $("#display").value = currentUserNumber;

})

$("#btnSeven").addEventListener("click", evt => {

    currentUserNumber += "7";
    $("#display").value = currentUserNumber;
})

$("#btnEight").addEventListener("click", evt => {

    currentUserNumber += "8";
    $("#display").value = currentUserNumber;
 })

$("#btnNine").addEventListener("click", evt => {

    currentUserNumber += "9";
    $("#display").value = currentUserNumber;
})

$("#btnZero").addEventListener("click", evt => {

    currentUserNumber += "0";
    $("#display").value = currentUserNumber;
})

$("#btnDecimal").addEventListener("click", evt => {

    currentUserNumber += ".";
    $("#display").value = currentUserNumber;
})

// This function will preform the actual operations and update using the result in the display.
function evaluationUserInput (){

    let tempNum = 0.0;

    // Use a for loop to loop through the array using the global index as the stopping point of the loop iteration
    for(let i = 0; i <= currentIndex; i++){

       // alert("i " + i + " ,array length " + userEnteredNumbers.length);

        // Determine if the current loop iteration is even using modulo by 2. If true it will convert the number stored at the index to a floating point.
        if(i % 2 === 0){
            
            tempNum = parseFloat(userEnteredNumbers[i]);
            //alert("tempNum " + tempNum + " i " + i);
        }else if(i % 2 === 1 && i == currentIndex){
            
            // The user clicked enter immediantly after clicking an operation so there is no remaining number to preform an operation with. The loop will be broken to
            // exit and display the total.
            //alert("i " + i + " currentIndex " + currentIndex);
            break;

        }else{

            // This continue statement will continue the loop on to the next iteration without continuing the current iteration. This is being done because every odd
            // element in the array is holding what type of operation is being preformed, which will be preformed when the iteration of the loop is at an even element
            // that is not zero.
            continue;
        }

        // Determine which operation is dictated by the index before the current loop index.
        if(i == 0){
            
            total = tempNum;

        } else if(userEnteredNumbers[i - 1] == "add"){

            total += tempNum;

        }else if(userEnteredNumbers[i - 1] == "subtract"){

            total -= tempNum;

        }else if(userEnteredNumbers[i - 1] == "multiply"){

            total *= tempNum;

        }else if(userEnteredNumbers[i - 1] == "divide"){

            total /= tempNum;
        }
        
        tempNum = 0.0;
    }

    $("#display").value = total;

    currentUserNumber = "";
    currentIndex = 0;
    userEnteredNumbers = [];
}