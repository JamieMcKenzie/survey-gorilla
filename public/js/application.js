$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  $('.form-container').on('click', '#add-option', function(event){
    console.log("HELLO?")
    event.preventDefault();
    //append input field to the doobly.
    $('#add-option').before('<input type="text" name="options[]" placeholder="Option"><br>')
  });
  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
  $('#new-form').on("submit", function(event){
    event.preventDefault()
    $.ajax({
      type: "POST",
      url: "/forms",
      data:$('form').serialize(),
      success: function(response){

        $('.absolute-center-top').html(response)
        // debugger;
        console.log("success")
      }
    })
  })

  $('.form-container').on('submit', '#finish-form', function(){
    event.preventDefault();
    $.ajax({
      type: "POST",
      url: this.attributes.action.nodeValue,
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
      url: this.attributes.action.nodeValue,
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
        console.log("getting new form in t-minus..")
        $('.absolute-center-top').html(response)
      }
    })
  })

});



// $.ajax({
//   type:
//   url:
//   dataType:
//   data:
//   success: function(response){

//   }
// })