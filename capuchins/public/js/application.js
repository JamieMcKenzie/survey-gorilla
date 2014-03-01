var $Wrapper = {

  answerListener: function(){
    $("form .answer_form").submit (function(e){
      e.preventDefault();
      postAnswer();
    });
  },

  postAnswer: function(){
      var path = $(".answer_form").attr("action"); //later see if can take out
      var data = $("form").serialize();
      $.ajax({
        type: "POST",
        url: path,
        data: data
      }).success(function(msg){
        $(".answer_form").prepend("<h1>" + msg + "</h1>");
      }).fail(function(){
        $(".header").append("<h1>Submission Failed! Try again!</h1>");
      });
  },

  addQuestion: function(){
    $('.add_question').click(function(e){
          var newQuestion = '<label for="question">Question:</label><input type="text" name="questions[]" id="question" class="question">'
          $(newQuestion).insertAfter('.add_question');
        });
  },
  submitForm: function(){
    $('form .survey').submit(function(e){
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: "/surveys",
        data: $('form').serialize()
      }).success(function(resp){
        $('form').css("display","none");
        $('.url_display').append("Survey Link: <a href='/surveys/"+resp+"'>/surveys/"+resp + "</a>");
      }).fail(function(resp){
        $('form').css("display","none");
        $('.url_display').append("Error. No URL!");
      });
    });
  }
}

$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them
  $Wrapper.answerListener();
  $Wrapper.addQuestion();
  $Wrapper.submitForm();
});

