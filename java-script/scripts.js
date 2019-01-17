$(document).ready(function() {
// this is attached to the form. .submit for the submit button
  $("#date").submit(function(event) {
    event.preventDefault();

    var result = $("#unit1").val();

    if (result === "sleep") {
      $('#output').text("sleeping");
    } else if (result === "walk") {
      $('#output').text("walking");
    } else if (result === "nothing"){
      $('#output').text("nothing");
      console.log("nothing");
      $('#nothing').show();
    } else if (result === "eat") {
      $('#output').text("eating");
      console.log("eat");
      $('#eat').show();
    } else if (result === "other"){
      $('#output').text("other");
      console.log("other");
      $('#other').show();
    } else if (result === "6") {
      $('#output').text("please don't click me");
      console.log("six");
    } else {
      console.log("got to end")

    };


  });


});
