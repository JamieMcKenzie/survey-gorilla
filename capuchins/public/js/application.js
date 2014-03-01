$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  $('.add_question').click(function(e){
        var newQuestion = '<label for="question">Question:</label><input type="text" name="questions[]" id="question" class="question">'
        $(newQuestion).insertAfter('.add_question');
      });

  $('form').submit(function(e){
    e.preventDefault();
    $.ajax({
      type: "POST",
      url: "/surveys",
      data: $('form').serialize()
    }).success(function(resp){
      $('form').css("display","none");
      $('.url_display').append("<a href='/surveys/"+resp+"'>Survey Link</a>");
    }).fail(function(resp){
      $('form').css("display","none");
      $('.url_display').append("Error. No URL!");
    });
  });

});
