// APIs pulled from: https://developers.giphy.com/ //
// research conducted on: https://github.com/Giphy //



// come back to articleBox //
// will the accents below work with utf-8? //
var topics = ["Chilean hot dogs", "Sonoran hot dogs", "Chicago hot dogs", "mu‘assel", "Monster energy drink", "Maori fort"]

document.ready function (){
$("#btnViewer").empty();
  // Looping through the array of topics
  for (var i = 0; i < topics.length; i++) {

    var a = $("<button>");
    // Adding a class
    a.addClass("gif");
    // Adding a data-attribute with a value of the movie at index i
    a.attr("data-name", topics[i]);
    // Providing the button's text with a value of the movie at index i
    a.text(topics[i]);
    // Adding the button to the HTML
    $("#btnViewer").append(a);




$("#submitBtn").on("click", function(event){
    event.preventDefault();
    var topic = $("#searchTerm").val().trim();
            // The movie from the textbox is then added to our array
    topics.push(topics);

    // run render buttons

      }
    });
    // review the order conventions later

$("button").on("click", function() {
          // In this case, the "this" keyword refers to the button that was clicked
          var searchTerm = $(this).attr("data-name");
          var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&limit=20&api_key=mEX6cQnABCZbJIvXRQnTWqKdCkPJcj0h";
          // took a second to figure out how to set the printed results to 20 //

$.ajax({
    url: queryURL,
    method: 'GET',
}).then(function(response) {
  console.log(queryURL);
    for (var i=0;i<topics.length;i++){





})
}

// template below //
$(document).ready(function() {
  var animals = [
    "dog", "cat", "rabbit", "hamster", "skunk", "goldfish",
    "bird", "ferret", "turtle", "sugar glider", "chinchilla",
    "hedgehog", "hermit crab", "gerbil", "pygmy goat", "chicken",
    "capybara", "teacup pig", "serval", "salamander", "frog"
  ];
  // function to make buttons and add to page
  function populateButtons(arrayToUse, classToAdd, areaToAddTo) {
    $(areaToAddTo).empty();
    for (var i = 0; i < arrayToUse.length; i++) {
      var a = $("<button>");
      a.addClass(classToAdd);
      a.attr("data-type", arrayToUse[i]);
      a.text(arrayToUse[i]);
      $(areaToAddTo).append(a);
    }
  }
  $(document).on("click", ".animal-button", function() {
    $("#animals").empty();
    $(".animal-button").removeClass("active");
    $(this).addClass("active");
    var type = $(this).attr("data-type");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + type + "&api_key=dc6zaTOxFJmzC&limit=10";
    $.ajax({
      url: queryURL,
      method: "GET"
    })
    .then(function(response) {
      console.log(response);
      var results = response.data;
      for (var i = 0; i < results.length; i++) {
        var animalDiv = $("<div class=\"animal-item\">");
        var rating = results[i].rating;
        var p = $("<p>").text("Rating: " + rating);
        var animated = results[i].images.fixed_height.url;
        var still = results[i].images.fixed_height_still.url;
        var animalImage = $("<img>");
        animalImage.attr("src", still);
        animalImage.attr("data-still", still);
        animalImage.attr("data-animate", animated);
        animalImage.attr("data-state", "still");
        animalImage.addClass("animal-image");
        animalDiv.append(p);
        animalDiv.append(animalImage);
        $("#animals").append(animalDiv);
      }
    });
  });
  $(document).on("click", ".animal-image", function() {
    var state = $(this).attr("data-state");
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
    }
    else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
    }
  });
  $("#add-animal").on("click", function(event) {
    event.preventDefault();
    var newAnimal = $("input").eq(0).val();
    if (newAnimal.length > 2) {
      animals.push(newAnimal);
    }
    populateButtons(animals, "animal-button", "#animal-buttons");
  });
  populateButtons(animals, "animal-button", "#animal-buttons");
});


//)};


// run renderBtns function


// display below each gif its rating




// instructions below this point //

// Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called topics. //
// We chose animals for our theme, but you can make a list to your own liking. Your app should take the topics in this array and create buttons in your HTML. //
// Try using a loop that appends a button for each string in the array. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page. //
// When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing. //
// Under every gif, display its rating (PG, G, so on). //
// This data is provided by the GIPHY API. Only once you get images displaying with button presses should you move on to the next step. Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page. //

// end instructions //
