//User interface logic//
$(document).ready(function() {

  $("form#text-area").submit(function(event) {
    event.preventDefault();
    var inputtedthings = $("input#general").val();
    $("ul#here").append("<li><span class='contact'>" + inputtedthings + "</span></li>");
    $("text-area#message").val("");
    var vashti=$("textarea#message").val();
    $(".contact").click(function() {
      $("#show-contact").last().toggle();
      $(".description").text(vashti)      


    })
  })
})
