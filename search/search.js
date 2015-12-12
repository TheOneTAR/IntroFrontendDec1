document.search.addEventListener('submit', search, false);

function search(event) {
   // Stop the default behavior, a redirect
   event.preventDefault();

   // // Get search term from form
   // var search_term = event.target.search_term.value;

   // // Send the API
   // var xhr = new XMLHttpRequest();

   // xhr.onload = function() {

   //    var responseObject = JSON.parse(xhr.responseText);

   //    console.log(responseObject);
   // };

   // xhr.open('GET', 'http://version1.api.memegenerator.net/Generators_Search?q=' + search_term, true);
   // xhr.send();

   console.log(results);

   var new_HTML = "";

   for (var i = 0; i < results.result.length; i++) {
      new_HTML += "<img src='" + results.result[i].imageUrl + "'/>";
   };

   document.getElementById("results").innerHTML = new_HTML;

   // send the data to populate the list


}