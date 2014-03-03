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
  submitQuestion: function(){
    $('.submit_question').click(function(e){
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: "/surveys/questions",
        data: $('form.survey').serialize()
      }).success(function(resp){
        var survey = JSON.parse(resp);
        $('form.survey').replaceWith('<form class="survey"><input type="hidden" name="id" value='+survey.id+'><label>Title: '+survey.title+'</label><input type="button" value="Next Question" class="submit_question"><label>Question:<input type="text" name="question" class="question" required="true"></label><input type="button" value="Add Choice" class="add_choice"><label>Choice:<input type="text" name="choices[]" class="choice" required="true"></label><input type="submit" value="Generate Survey"></form>');
      }).fail(function(resp){
        console.log(resp);
        $('form.survey').css("display","none");
        $('.url_display').append("Error. No Question Recorded!");
      });
    });
  },
  addChoice: function(){
    $('.add_choice').click(function(e){
      var newChoice = '<label>Choice:<input type="text" name="choices[]" class="choice" required="true"></label>';
      $(newChoice).insertAfter('.add_choice');
    });
  },
  submitForm: function(){
    $('body').on('submit','form.survey',function(e){
      e.preventDefault();
      $.ajax({
        type: "POST",
        url: "/surveys",
        data: $('form.survey').serialize()
      }).success(function(resp){
        console.log(resp);
        $('form').css("display","none");
        $('.url_display').append("Survey Link: <a href='/surveys/"+resp+"'>/surveys/"+resp + "</a>");
      }).fail(function(resp){
        console.log(resp);
        $('form').css("display","none");
        $('.url_display').append("Error. No URL!");
      });
    });
  }
};

$(function() {

  $Wrapper.answerListener();
  $Wrapper.submitQuestion();
  $Wrapper.addChoice();
  $Wrapper.submitForm();
});

