var $Wrapper = {

  answerListener: function(){
    $("form.answer_form").submit (function(e){
      e.preventDefault();
      $Wrapper.postAnswer();
    });
  },

  postAnswer: function(){
      var path = $(".answer_form").attr("action");
      var data = $("form.answer_form").serialize();
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
        $('form.survey').replaceWith('<form class="survey"><input type="hidden" name="id" value='+survey.id+'><label>Title: '+survey.title+'<br></label><br><br><label>Question: <br><input type="text" name="question" class="question" required="true"></label><input type="button" value="Next Question" class="submit_question"><br><br><input type="button" value="Add Choice" class="add_choice"><br><ul><div class="more_choice"><li><label>Choice: <input type="text" name="choices[]" class="choice" required="true"></label></li></div></ul><br><br><input type="submit" value="Generate Survey"></form>');
      }).fail(function(resp){
        console.log(resp);
        $('form.survey').css("display","none");
        $('.url_display').append("Error. No Question Recorded!");
      });
    });
  },
  addChoice: function(){
    $('body').on('click','.add_choice', function(e){
      var newChoice = '<li><label>Choice: <input type="text" name="choices[]" class="choice" required="true"></label></li>';
      $(newChoice).insertAfter('.more_choice');
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

