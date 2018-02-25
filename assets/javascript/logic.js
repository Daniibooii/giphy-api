// APIs pulled from: https://developers.giphy.com/ //
// research conducted on: https://github.com/Giphy //


$("#submitBtn").on("click", function(event){
    event.preventDefault();
    $("#articleBox").empty();
// come back to articleBox //
// will the accents below work with utf-8? //
var topics = ["Chilean hot dogs", "Sonoran hot dogs", "Chicago hot dogs", "mu‘assel", "Monster energy drink", "pā"]
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + gifs + "&limit=20&api_key=mEX6cQnABCZbJIvXRQnTWqKdCkPJcj0h";
// took a second to figure out how to set the printed results to 20 //
var searchTerm = $("#searchTerm").val();


$.ajax({
    url: queryURL,
    method: 'GET',
}).then(function(response) {

    for (var i=0;i<limit;i++){
      var gifs = $
      $("<div class =".html();
    }
});
});







// instructions below this point //

// Before you can make any part of our site work, you need to create an array of strings, each one related to a topic that interests you. Save it to a variable called topics. //
// We chose animals for our theme, but you can make a list to your own liking. Your app should take the topics in this array and create buttons in your HTML. //
// Try using a loop that appends a button for each string in the array. When the user clicks on a button, the page should grab 10 static, non-animated gif images from the GIPHY API and place them on the page. //
// When the user clicks one of the still GIPHY images, the gif should animate. If the user clicks the gif again, it should stop playing. //
// Under every gif, display its rating (PG, G, so on). //
// This data is provided by the GIPHY API. Only once you get images displaying with button presses should you move on to the next step. Add a form to your page takes the value from a user input box and adds it into your topics array. Then make a function call that takes each topic in the array remakes the buttons on the page. //

// end instructions //

// code from earlier project NYT-scraper below; will be used as a reference as this is built out //

$("#submitBtn").on("click", function(event){
    event.preventDefault();
    $("#articleBox").empty();

    // take input from forms
    var searchTerm = $("#searchTerm").val();
    var limit = $("#resultLength").val();
    var start = $("#startYear").val();
    var end = $("#endYear").val();

    // for edge case with no input in resultLength
    if(!limit){
        limit=10;
    }

    // Urls for different situations of date boundary input
    var url = "";
    var urlBoth = "https://api.nytimes.com/svc/search/v2/articlesearch.json?fq="
    +searchTerm+"&begin_date="+start+"0101&end_date="+end+"0101&api-key=4f3b87ebf5b24f85ab9eba9ab5f59cc1";
    var urlStart= "https://api.nytimes.com/svc/search/v2/articlesearch.json?fq="
    +searchTerm+"&begin_date="+start+"0101&api-key=4f3b87ebf5b24f85ab9eba9ab5f59cc1";
    var urlEnd= "https://api.nytimes.com/svc/search/v2/articlesearch.json?fq="
    +searchTerm+"&end_date="+end+"0101&api-key=4f3b87ebf5b24f85ab9eba9ab5f59cc1";
    var urlNeither= "https://api.nytimes.com/svc/search/v2/articlesearch.json?fq="
    +searchTerm+"&api-key=4f3b87ebf5b24f85ab9eba9ab5f59cc1";

    // conditional to prevent error if one or both years aren't input
    if (start===""&&end===""){
        url = urlNeither;
    } else if (start===""){
        url = urlEnd;
    } else if (end===""){
        url = urlStart;
    } else {
        url = urlBoth;
    }
    $.ajax({
        url: url,
        method: 'GET',
    }).then(function(response) {
        // after promise, retreive information and append it to the article box div

        for (var i=0;i<limit;i++){
        var title = $("<h3>").text(response.response.docs[i].headline.main);
        var articleURL = $("<a>").attr("href", response.response.docs[i].web_url).append(title);
        var snippet = $("<p>").text(response.response.docs[i].snippet);
        var pubDate = $("<p>").html("<b>Published in "+response.response.docs[i].pub_date.slice(0,4)+"</b>");
        var lineBreak = $("<div>").addClass("lineBreak");
        $("#articleBox").append(articleURL,snippet,pubDate,lineBreak);
        }
    });
});
