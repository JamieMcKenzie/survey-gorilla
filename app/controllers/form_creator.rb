get '/' do
  erb :home
end

get '/forms/new' do
  erb :new_form
end

get '/forms' do
  erb :index_forms
end

post '/forms' do
  @form = Form.create(title: params[:title])
  @question1 = Question.create(question: params[:question1], form_id: @form.id)
  @question2 = Question.create(question: params[:question2], form_id: @form.id)
  @option1 = Option.create(answer: params[:option1], question_id: @question1.id)
  @option2 = Option.create(answer: params[:option2], question_id: @question1.id)
  @option3 = Option.create(answer: params[:option3], question_id: @question2.id)
  @option4 = Option.create(answer: params[:option4], question_id: @question2.id)
  redirect "/forms/#{@form.id}"
  # if successful redirect else FUCK YOU
end

get '/forms/:id' do
 @form = Form.find(params[:id])
 @questions = @form.questions
 @options = @form.questions.map(&:options)

 erb :show_form
end

get '/forms/:form_id/results/:user_id' do
  @entries = Entry.find_all_by_user_id_and_form_id(params[:user_id],params[:form_id])
  @questions = Question.find_all_by_form_id(params[:form_id])

end

