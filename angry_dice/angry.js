window.onload = function() {
   document.getElementById("roll").onclick = roll;

   // Create the two dice when the program loads
   die_1 = new Die("die_1");
   die_2 = new Die("die_2");

   // Initialize the die_to_roll array
   die_to_roll.push(die_1, die_2);

   // Add the toggle event listeners to the dice.
   die_1.html.addEventListener('click', toggle_die_hold);
   die_2.html.addEventListener('click', toggle_die_hold);
}

// an array that has the dice image paths
var dice = ['1.png', '2.png', 'angry.png','4.png','5.png','6.png'];

// Dice globals
var die_1;
var die_2; 

var die_to_roll = [];

function Die(id) {
   // Set the initial side of the die to 1
   this.side = dice[0];

   // Get the die's HTML element
   this.html = document.getElementById(id);

   // if the die is held
   this.held = false;

   this.roll = function() {
      // assign the side to a random image in the array
      this.side = dice[random_num(0,5)];

      // update the HTML die's image
      this.html.innerHTML = "<img src='" + this.side + "'/>";
   };

   this.hold_die = function(hold) {
      // if hold is true, remove die from die_to_roll
      // and toggle hold style
      if (hold) {
         this.html.className = "hold";
         var index = die_to_roll.indexOf(this);
         if (index > -1) {
             die_to_roll.splice(index, 1);
         }
         this.held = true;
      } else {
         this.html.className = "";
         die_to_roll.push(this);
         this.held = false;
      }
   };
}

/**
 * Rolls any dice not held.
 */
function roll() {

   // Roll the dice to roll
   for (var i = 0; i < die_to_roll.length; i++) {
      die_to_roll[i].roll();
   };
}

/**
 * Triggered when a user clicks a die.
 * Removes or adds the die to the die_to_roll array,
 * so it is either held or rolled.
 * 
 * event: the click event on the die
 */
function toggle_die_hold(event){
   if (event.target.parentElement === die_1.html) {
      die_1.hold_die(!die_1.held);
   } else if (event.target.parentElement === die_2.html) {
      die_2.hold_die(!die_2.held);
   }
}

/**
 * Helper function that provides a random int from min to max.
 */
function random_num(min, max) {
   return Math.floor(Math.random() * (max + 1)) + min;
}