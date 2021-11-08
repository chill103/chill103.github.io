/*
Arrays - Activity 8
Charlotte Hill

Academic Integrity of Assignment Statement
I, Charlotte Hill, have not copied and pasted code into these pages. I have gotten help from no person or sites
Used to ensure that break and continue are used in JavaScript just like they are in Java.

Charlotte M. Hill 
10/10/2021 11:16 pm
*/

"using strict"

// Global variables
var employeeNameArray = [];
var employeeSalaryArray = [];
const $ = selector => document.querySelector(selector);

$("#addSalary").addEventListener("click", evt => addSalary());
$("#displayResults").addEventListener("click", displayResults());
$("#displaySalary").addEventListener("click", displaySalary());


// This function will display the average salary and the highest salary information.
function displayResults(){

    // Local variables
    let salaryAverage = 0;
    let salaryHighest = employeeSalaryArray[0];

    // Loop through the salary array adding each salary together and finding the highest salary
    for(let i = 0; i < employeeSalaryArray.length; i++){

        // Add the current salary to the average variable
        salaryAverage += employeeSalaryArray[i];

        // Determine if the current salary is more than the current highest salary
        if(salaryHighest < employeeSalaryArray[i]){
            salaryHighest = employeeSalaryArray[i];
        }

    }

    // Find the average
    salaryAverage /= employeeSalaryArray.length;

    alert("average " + salaryAverage + " highest " + salaryHighest);

    // Display the results in the results div. Must include a tagline for an h2 and use the two p for the average and highest salaries.
    document.getElementById("#results_tagline").innerHTML = "Results of Salary Calculations";
    document.getElementById("#results_average").innerHTML = "The average salary is " + salaryAverage;
    document.getElementById("#results_highest").innerHTML = "The highest salary is " + salaryHighest;

}

function displaySalary(){
    
}

function addSalary(){

    // Validate the salary entered and make sure that an actual name was chosen.
    if($("#employee").value == ""){

        // Alert the user to choose an employee
        alert("Please choose an employee.");

    }else if(isNaN(parseInt($("#employeeSalary").value)) == true){

        // Alert the user to enter a number
        alert("Please enter the employee's salary.")

    }else{

        employeeNameArray.push($("#employee").value);
        employeeSalaryArray.push($("#employeeSalary").value);

        $("#employeeSalary").value = "";
        $("#employee").value = "";
    }

}