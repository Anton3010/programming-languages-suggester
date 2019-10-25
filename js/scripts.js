$(document).ready(function(){
  // Define global variables
  var cSharp = 0;
  var java = 0;
  var javaScript = 0;
  // Listen to submit event of the form with id questions-form
  $("#questions-form").submit(function(event) {
    event.preventDefault();
    // if/else statement for the first question
    var zodiacSign = $("#zodiac-sign").val().toLowerCase();
    if (zodiacSign === "aries" || zodiacSign === "leo" || zodiacSign === "cancer" || zodiacSign === "pisces") {
      cSharp += 1;
    }
    else if (zodiacSign === "scorpio" || zodiacSign === "taurus" || zodiacSign === "sagittarius" || zodiacSign === "gemini") {
      java += 1;
    }
    else {
      javaScript += 1;
    }
    // if/else statement for the second question
    var weather = $("#weather").val();
    if (weather === "Sunny") {
      cSharp += 1;
    }
    else if (weather === "Cloudy") {
      java += 1;
    }
    else {
      javaScript += 1;
    }
    // if/else statement for the third question
    var color = $("input:radio[name=color]:checked").val();
    if (color === "red") {
      cSharp += 1;
    }
    else if (color === "blue") {
      java += 1;
    }
    else {
      javaScript += 1;
    }
    // if/else statement for the fourth question
    var number = parseInt($("#favorite-number").val());
    if (number % 2 === 0) {
      cSharp += 1;
    }
    else if (number % 3 === 0) {
      java += 1;
    }
    else {
      javaScript += 1;
    }
    // if/else statement for the fifth question
    var pet = $("input:radio[name=pet]:checked").val();
    if (pet === "cat") {
      cSharp += 1;
    }
    else if (pet === "dog") {
      java += 1;
    }
    else {
      javaScript += 1;
    }

    // if/else statement for cSharp, java, javaScript variables comparison
    if (cSharp > java && cSharp > javaScript) {
      $("#result").text("C#");
    }
    else if (java > cSharp && java > javaScript) {
      $("#result").text("Java");
    }
    else if (javaScript > cSharp && javaScript > java) {
      $("#result").text("JavaScript");
    }
    else if (cSharp > javaScript && java > javaScript && cSharp === java) {
      $("#result").text("C# and Java");
    }
    else if (cSharp > java && javaScript > java && cSharp === javaScript) {
      $("#result").text("C# and JavaScript");
    }
    else {
      $("#result").text("Java and JavaScript");
    }
    // Show result
    $(".result-wrapper").show();
  });
});
