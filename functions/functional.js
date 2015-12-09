

// Add an event listener to the sum button
document.getElementById("sum").onclick = calculate;


function calculate() {
   // Get the numbers from the inputs
   var num1 = parseInt(document.getElementById("number1").value);
   var num2 = parseInt(document.getElementById("number2").value);

   // Pass them to add
   var sum = add(num1, num2);
   var sub = subtract(num1, num2);
   var multi = multiple(num1, num2);
   var div = divide(num1, num2);

   // Update the div with the sum
   var new_HTML = "<h3>Sum:</h3>" + sum;
   new_HTML += "<h3>Difference:</h3>" + sub;
   new_HTML += "<h3>Multiplied:</h3>" + multi;
   new_HTML += "<h3>Division</h3>" + div;

   document.getElementById("solution").innerHTML = new_HTML;
}

function add(number1, number2) {
   // add together the two passed numbers
   var sum = number1 + number2;

   // Return the sum of the passed numbers
   return sum;
}

function subtract(number1, number2) {
   // subtract the two passed numbers
   var total = number1 - number2;

   // Return the difference of the passed numbers
   return total;
}

function multiple(number1, number2) {
   var total = number1 * number2;

   return total;
}

function divide(number1, number2) {
   return number1 / number2;
}

function average(number1, number2) {
   var sum = add(number1, number2);

   // Divide the sum by 2
   var average = divide(sum, 2);
   return average;
}




