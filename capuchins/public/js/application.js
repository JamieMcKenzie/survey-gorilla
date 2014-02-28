$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  $('.add_question').click(function(e){
        var newQuestion = '<label for="question">Question:</label><input type="text" name="question" id="question" class="question">'
        $(newQuestion).insertAfter('.add_question');
      });

});
