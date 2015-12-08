
// Make a Madlib with the user
var madlib = "It was a ";

var adverb = prompt("Give me an adverb. Please.");

// Check that you got something in adverb
if (adverb == null) {
   adverb = "stormy";
}

madlib = madlib + adverb + " night last night. Local sources say ";

var nameof = prompt("Give me a name, please.");
if (nameof == null) {
   nameof = "Steve";
}

madlib = madlib + nameof + " was seen ";

var verb = prompt("Give me a verb, PLEASE.");
if (verb == null){
   verb = "dancing";
}

madlib += verb + " on ";

var thing = prompt("Give me an inanimate object.");
if (thing == null){
   thing = "book";
}

madlib += thing + ". Police say this is ";

var adjective = prompt("Give me an adjective.");
if (adjective == null){
   adjective = "nature";
}

madlib += adjective + " though, so they will continue to do nothing.";

// Print the madlib to the console.
console.log(madlib);

// Add the madlib to the webpage.
// ===============================
// get the madlib div from the html page, store a reference to it in Javascript
var madlib_div = document.getElementById("madlib");

// add the madlib into the div
madlib_div.textContent = madlib;






