
document.getElementById("roll").onclick = roll;

function roll() {
   document.getElementById("dice").innerHTML = "";

   var num = document.getElementById("num").value;

   var dice_img = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'];

   for (var i = 0; i < num; i++) {
      // Generate a random number between 1 and 6 
      var side = Math.floor(Math.random() * 6) + 1;

      // Show the correct dice side for the randomly generated number

      // <img src='3.png' />
      document.getElementById("dice").innerHTML += "<img src='" + dice_img[side-1] + "' />";
   };


}


