$(document).ready(function(){


submit();


});

var submit = function(){
  $("form").submit (function(event){
    event.preventDefault();
    postSurvey();
  });
}

var postSurvey = function(){
  var path = $(".answer_form").attr("action"); //later see if can take out
  var data = $("form").serialize();
  $.ajax({
    type: "POST",
    url: path,
    data: data
  }).success(function(msg){
    $("#survey").replaceWith("<h1>" + msg + "</h1>");
  }).fail(function(){
    $(".header").append("<h1>Submission Failed! Try again!</h1>");
  });


}
//$("#question_id_1").val()