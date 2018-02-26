// APIs pulled from: https://developers.giphy.com/ //
// research conducted on: https://github.com/Giphy //


$("#submitBtn").on("click", function(event){
    event.preventDefault();
    $(".col-md-8").empty();
// come back to articleBox //
// will the accents below work with utf-8? //
var topics = ["Chilean hot dogs", "Sonoran hot dogs", "Chicago hot dogs", "mu‘assel", "Monster energy drink", "pā"]
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&limit=20&api_key=mEX6cQnABCZbJIvXRQnTWqKdCkPJcj0h";
// took a second to figure out how to set the printed results to 20 //
var searchTerm = $("#searchTerm").val();

// this may really be two separate functions; unsure if that's poor practice though //
$.ajax({
    url: queryURL,
    method: 'GET',
}).then(function(response) {
    for (var i=0;i<topics.length;i++){

      var gifCol = $(".col-md-8");
      var gif = $("<button>").text(response[i]);

      gifCol.append(gif);

});
});

// so: first, push user inputs into the topics array
// then: run that array and create buttons for each one
// so, each btn will need to have .attr to make it function?
// then, print 20 gifs when a button is clicked
// display below each gif its rating 




// instructions below this point //

// Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called topics. //
// We chose animals for our theme, but you can make a list to your own liking. Your app should take the topics in this array and create buttons in your HTML. //
// Try using a loop that appends a button for each string in the array. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page. //
// When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing. //
// Under every gif, display its rating (PG, G, so on). //
// This data is provided by the GIPHY API. Only once you get images displaying with button presses should you move on to the next step. Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page. //

// end instructions //
