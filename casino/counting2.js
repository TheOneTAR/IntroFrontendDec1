document.getElementById("count").onclick = add_inventory;
document.getElementById("remove").onclick = remove_inventory;

var products = [];

function add_inventory() {
   var new_product = document.getElementById("new_product").value;

   products.push(new_product);
   
   var new_HTML = "";

   // Loop through your list of products
   for (var i = 0; i < products.length; i++) {

      new_HTML += products[i] + "<br />";

   }

   document.getElementById("onScreen").innerHTML = new_HTML;
}



function remove_inventory() {
   // Take the top item from the list

   // Print out the list
}