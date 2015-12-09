


var searchRequest = { "phrase": "dog" }


function GetSearchResults(callback) {
  $.ajax({
    type: "GET",
    url: "http://version1.api.memegenerator.net/Generators_Search?q=corgi&pageIndex=0&pageSize=12",
    })
    .success(function (data, textStatus, jqXHR) { 
         document.getElementById("images").innerHTML = data;
         console.log(data); })
    .fail(function (data, err) { /* handle errors */ });
}