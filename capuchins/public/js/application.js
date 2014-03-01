var $Wrapper = {

  answerListener: function(){
    $("form.answer_form").submit (function(e){
      e.preventDefault();
      $Wrapper.postAnswer();
    });
  },

  postAnswer: function(){
      var path = $(".answer_form").attr("action");
      var data = $("form").serialize();
      $.ajax({
        type: "POST",
        url: path,
        data: data
      }).success(function(msg){
        $(".answer_form").replaceWith("<h1>" + msg + "</h1>");
      }).fail(function(msg){
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
    $('form.survey').submit(function(e){
      console.log(e)
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: "/surveys",
        data: $('form.survey').serialize()
      }).success(function(resp){
        console.log(resp)
        $('form').css("display","none");
        $('.url_display').append("Survey Link: <a href='/surveys/"+resp+"'>/surveys/"+resp + "</a>");
      }).fail(function(resp){
        console.log(resp)
        $('form').css("display","none");
        $('.url_display').append("Error. No URL!");
      });
    });
  }
}

$(function() {

  $Wrapper.answerListener();
  $Wrapper.addQuestion();
  $Wrapper.submitForm();
});

