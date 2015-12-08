

// Add an event listener to the sum button
document.getElementById("sum").onclick = calculate;


function calculate() {
   // Get the numbers from the inputs
   var num1 = parseInt(document.getElementById("number1").value);
   var num2 = parseInt(document.getElementById("number2").value);

   // Pass them to add
   var sum = add(num1, num2);
   var sub = subtract(num1, num2);

   // Update the div with the sum
   document.getElementById("solution").textContent = "Sum: " + sum + " Difference: " + sub;
} 

function add(number1, number2) {
   // add together the two passed numbers
   var sum = number1 + number2;

   // Return the sum of the passed numbers
   return sum;
}

function subtract(number1, number2) {
   // add together the two passed numbers
   var total = number1 - number2;

   // Return the sum of the passed numbers
   return total;
}