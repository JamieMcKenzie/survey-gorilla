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
  indexSurveys = new Bind('#survey-link', "" ,"where all da forms at?")
  newForm = new Bind('.form-container','#new-form','success')
  showSurvey = new Bind('.form-container', '.show-survey', "gimme dat survey");
  indexSurveys.linkBind()
  newForm.submitBind()
  showSurvey.linkBind()
  // binder.initialize()
});

View = {
  update: function(response){
    $('.absolute-center-top').html(response)
  }
}
Controller = {
  post: function(uri, toConsole){
    $.ajax({
      type: "POST",
      url: uri,
      data: $('form').serialize(),
      success: function(response){
        View.update(response)
        console.log(toConsole)
      }
    })  
  },

  get: function(uri, toConsole){
    $.ajax({
      type: "GET",
      url: uri,
      success: function(response){
        View.update(response)
        console.log(toConsole)
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

function Bind(container, targetDiv,message){
  this.targetDiv = targetDiv
  this.container = container
  this.message = message
}

Bind.prototype = {

  linkBind: function(){
    var message = this.message
    $(this.container).on('click', this.targetDiv, function(){
      event.preventDefault();
      Controller.get(Url.aTag(this),message)
    })
  },

  submitBind: function(){
    $(this.container).on("submit", this.targetDiv, function(event){
      message = this.message
      event.preventDefault()
      Controller.post(Url.formSubmit(this), message)
    })
  }
}

//   submitAnswers: function(){
//     $(this.container).on('submit', '#submit-answers', function(){
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
//     $(this.container).on('click', '.get-new-form', function(){
//       event.preventDefault();
//       Ajaj.get(Url.aTag(this),"getting new form in t-minus..")
//     })
//   }, 

  addOption: function(){
    $(this.container).on('click', '#add-option', function(event){
      event.preventDefault();
      $('#add-option').before('<input type="text" class="input" name="options[]" placeholder="Option"><br>')
      console.log("HELLO?")
    });
  },

//   newQuestion: function(){
//     $(this.container).on('submit', '#new-question', function(){
//       event.preventDefault();
//       Ajaj.post(Url.formSubmit(this),"I sent a question, guys")
//     })
//   },

//   finishForm: function(){
//     $(this.container).on('submit', '#finish-form', function(){
//       event.preventDefault();
//       Ajaj.post(Url.formSubmit(this), "We're finishing! I can't stop!")
//     })
//   },

//   surveyResults: function(){
//     $(this.container).on('click','.survey-results', function(){
//       event.preventDefault();
//       Ajaj.get(Url.aTag(this),"dem results")
//     })
//   }
// }