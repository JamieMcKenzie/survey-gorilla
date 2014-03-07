// $(document).ready(function() {
//   Bind.initialize()
// });

// function ajaxRefresh(response){
//   $('.absolute-center-top').html(response)
// }

// var Ajaj = {
//   post: function(uri, toConsole){
//     $.ajax({
//       type: "POST",
//       url: uri,
//       data: $('form').serialize(),
//       success: function(response){
//         ajaxRefresh(response)
//         console.log(toConsole)
//       }
//     })  
//   },

//   get: function(uri, toConsole){
//     $.ajax({
//       type: "GET",
//       url: uri,
//       success: function(response){
//         ajaxRefresh(response)
//         console.log(toConsole)
//       }
//     })
//   }
// }

// var Url = {
//   formSubmit: function(element){
//     return element.attributes.action.nodeValue
//   },

//   aTag: function(element){
//     return element.attributes.href.nodeValue
//   }
// }



// var Bind = {

//   initialize: function(){
//     Bind.surveyLink()
//     Bind.showSurvey()
//     Bind.submitAnswers()
//     Bind.indexUserSurveys()
//     Bind.getNewForm()
//     Bind.newForm()
//     Bind.addOption()
//     Bind.newQuestion()
//     Bind.finishForm()
//     Bind.surveyResults()
//   },

//   surveyLink: function(){
//     $('#survey-link').on('click', function(){
//       event.preventDefault();
//       Ajaj.get("/forms","where all da forms at?")
//     })
//   },

//   newForm: function(){
//     $('.form-container').on("submit", "#new-form", function(event){
//       event.preventDefault()
//       Ajaj.post("/forms", "success")
//     })
//   },

//   showSurvey: function(){
//     $('.form-container').on('click','.show-survey', function(){
//     event.preventDefault();
//       Ajaj.get(Url.aTag(this), "gimme dat survey")
//     })
//   },

//   submitAnswers: function(){
//     $('.form-container').on('submit', '#submit-answers', function(){
//       event.preventDefault();
//       Ajaj.post(Url.formSubmit(this),"those answers really tie the room together")
//     })
//   },

//   indexUserSurveys: function(){
//     $('body').on('click','#user-surveys', function(){
//       event.preventDefault();
//       Ajaj.get(Url.aTag(this), "get ALL the surveys!")
//     })
//   },

//   getNewForm: function(){
//     $('.form-container').on('click', '.get-new-form', function(){
//       event.preventDefault();
//       Ajaj.get("/forms/new","getting new form in t-minus..")
//     })
//   }, 

//   addOption: function(){
//     $('.form-container').on('click', '#add-option', function(event){
//       event.preventDefault();
//       $('#add-option').before('<input type="text" class="input" name="options[]" placeholder="Option"><br>')
//       console.log("HELLO?")
//     });
//   },

//   newQuestion: function(){
//     $('.form-container').on('submit', '#new-question', function(){
//       event.preventDefault();
//       Ajaj.post(Url.formSubmit(this),"I sent a question, guys")
//     })
//   },

//   finishForm: function(){
//     $('.form-container').on('submit', '#finish-form', function(){
//       event.preventDefault();
//       Ajaj.post(Url.formSubmit(this), "We're finishing! I can't stop!")
//     })
//   },

//   surveyResults: function(){
//     $('.form-container').on('click','.survey-results', function(){
//       event.preventDefault();
//       Ajaj.get(Url.aTag(this),"dem results")
//     })
//   }
// }
$(document).ready(function() {
  var indexSurveys = new Bind('#survey-link')
  var newForm = new Bind('.form-container','#new-form')
  var showSurvey = new Bind('.form-container', '.show-survey')
  var submitAnswers = new Bind('.form-container', '#submit-answers')
  var indexUserSurveys = new Bind('body', '#user-surveys')
  var getNewForm = new Bind('.form-container', '.get-new-form')
  var addOption = new Bind('.form-container', '#add-option')
  var newQuestion = new Bind('.form-container', '#new-question')
  var finishForm = new Bind('.form-container', '#finish-form')
  var surveyResults = new Bind('.form-container','.survey-results')

  indexSurveys.linkBind()
  newForm.submitBind()
  showSurvey.linkBind()
  submitAnswers.submitBind()
  indexUserSurveys.linkBind()
  getNewForm.linkBind()
  addOption.addOption()
  newQuestion.submitBind()
  finishForm.submitBind()
  surveyResults.linkBind()
  // binder.initialize()
});

View = {
  update: function(response){
    $('.absolute-center-top').html(response)
  }
}

Controller = {
  post: function(uri){
    $.ajax({
      type: "POST",
      url: uri,
      data: $('form').serialize(),
      success: function(response){
        View.update(response)
      }
    })  
  },

  get: function(uri){
    $.ajax({
      type: "GET",
      url: uri,
      success: function(response){
        View.update(response)
      }
    })
  }
}

Url = {
  formSubmit: function(element){
    return element.attributes.action.nodeValue
  },

  aTag: function(element){
    return element.attributes.href.nodeValue
  }
}

function Bind(container, targetDiv){
  this.targetDiv = targetDiv
  this.container = container
}

Bind.prototype = {

  linkBind: function(){
    $(this.container).on('click', this.targetDiv, function(){
      event.preventDefault();
      Controller.get(Url.aTag(this))
    })
  },

  submitBind: function(){
    $(this.container).on("submit", this.targetDiv, function(){
      event.preventDefault()
      Controller.post(Url.formSubmit(this))
    })
  },

  //use template??
  addOption: function(){
    var targetDiv = this.targetDiv
    $(this.container).on('click', targetDiv, function(){
      event.preventDefault();
      $(targetDiv).before('<input type="text" class="input" name="options[]" placeholder="Option"><br>')
    });
  }
}
