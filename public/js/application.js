$(document).ready(function() {
  $('.form-container').on('click', '#add-option', function(event){
    console.log("HELLO?")
    event.preventDefault();
    $('#add-option').before('<input type="text" name="options[]" placeholder="Option"><br>')
  });
  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
  $('.form-container').on("submit", "#new-form", function(event){
    event.preventDefault()
    $.ajax({
      type: "POST",
      url: "/forms",
      data:$('form').serialize(),
      success: function(response){
        $('.absolute-center-top').html(response)
        console.log("success")
      }
    })
  })

  $('.form-container').on('submit', '#finish-form', function(){
    event.preventDefault();
    $.ajax({
      type: "POST",
      url: Url.formSubmit(this),
      data: $('form').serialize(),
      success: function(response){
        console.log("We're finishing! I can't stop!")
        window.location.assign("http://localhost:9393/")
      }
    })
  })

  $('.form-container').on('submit', '#new-question', function(){
    event.preventDefault();
    $.ajax({
      type: "POST",
      url: Url.formSubmit(this),
      data: $('form').serialize(),
      success: function(response){
        console.log("I sent a question, guys")
        $('.absolute-center-top').html(response)
      }
    })
  })

  $('.form-container').on('click', '.get-new-form', function(){
    event.preventDefault();
    $.ajax({
      type: "GET",
      url:"/forms/new",
      success: function(response){
        console.log("getting new form in t-minus..")
        $('.absolute-center-top').html(response)
      }

    })
  })

  $('#survey-link').on('click', function(){
    event.preventDefault();
    $.ajax({
      type: "GET",
      url:"/forms",
      success: function(response){
        console.log("where all da forms at?")
        $('.absolute-center-top').html(response)
      }
    })
  })

  $('.form-container').on('click','.show-survey', function(){
    event.preventDefault();
    $.ajax({
      type: "GET",
      url: Url.aTag(this),
      success: function(response){
        console.log("gimme dat survey")
        $('.absolute-center-top').html(response)
      }
    })
  })

  // submit entries
  $('.form-container').on('submit', '#submit-answers', function(){
    event.preventDefault();
    $.ajax({
      type: "POST",
      url: Url.formSubmit(this),
      data: $('form').serialize(),
      success: function(response){
        console.log("those answers really tie the room together")
        $('.absolute-center-top').html(response)
      }
    })
  })

});

var Url = {
  formSubmit: function(element){
    return element.attributes.action.nodeValue
  },

  aTag: function(element){
    return element.attributes.href.nodeValue
  }
}

