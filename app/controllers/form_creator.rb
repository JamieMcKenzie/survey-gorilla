get '/' do
  erb :home
end

get '/forms/new' do
  redirect '/login' unless logged_in?
  erb :new_form, layout: false
end

get '/forms' do
  @forms = Form.all
  erb :index_forms, layout: false
end

post '/forms' do
  @form = Form.create(title: params[:title], user_id: session[:id])
  redirect "/forms/#{@form.id}/questions/new"

end

get '/forms/:form_id/questions/new' do
  @form = Form.find(params[:form_id])
  erb :new_question, layout: false # this should have form title and question1
end

post "/forms/:form_id/questions" do
  @form = Form.find(params[:form_id])

  unless params[:question].empty?
  question = Question.create(question: params[:question], form_id: @form.id, )
    if params[:options]
      params[:options].each do |answer|
        Option.create(answer: answer, question_id: question.id) unless answer.empty?
      end
    end
  end
  redirect "/forms/#{@form.id}/questions/new"
end

post "/forms/:form_id/survey" do
  @form = Form.find(params[:form_id])

  unless params[:question].empty?
  question = Question.create(question: params[:question], form_id: @form.id, )
    if params[:options]
      params[:options].each do |answer|
        Option.create(answer: answer, question_id: question.id) unless answer.empty?
      end
    end
  end
  redirect "/users/#{session[:id]}"
end

get '/forms/:form_id/results/:user_id' do
  @entries = Entry.find_all_by_user_id_and_form_id(params[:user_id],params[:form_id])
  @questions = Question.find_all_by_form_id(params[:form_id]).sort_by(&:id)
  @options = @entries.map(&:option).sort_by(&:question_id)
  erb :show_results, layout: false
end

get '/forms/:form_id/results' do
  @entries = Entry.find_all_by_form_id(params[:form_id])
  @questions = Question.find_all_by_form_id(params[:form_id]).sort_by(&:id)
  #split options into the questions it is from
  @options = @entries.map(&:option).sort_by(&:question_id)

  @answer_options = Entry.group(:option_id).count
 erb :results_form, layout: false
end

get '/forms/:id' do
 @form = Form.find(params[:id])
 @questions = @form.questions
 @options = @form.questions.map(&:options)

 unless Entry.find_by_user_id_and_form_id(session[:id], params[:id]).nil?
  redirect to("/forms/#{@form.id}/results/#{session[:id]}")
 end

 erb :show_form, layout: false
end
