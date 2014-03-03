get '/surveys/new' do
  erb :"surveys/new"
end

post '/surveys/questions' do
  @user = User.find(session[:id])
  if params[:id]
    @survey = @user.surveys.find(params[:id])
  else
    @survey = @user.surveys.create(title: params[:title])
  end
  @survey.questions.new(text: params[:question]) do |question|
        params[:choices].each do |choice|
          question.choices.new(choice_text: choice.strip)
        end
  end
  @survey.save
  @survey.to_json
end

post '/surveys/:id/answers' do
  @user = User.find(session[:id])
  @survey = Survey.find(params[:id])
  params[:choices].each do |choice|
    @user.choices
  end
  # params[:response].each do |answer|
  #   Answer.create(response: answer[1], question_id: answer[0] )
  # end

  "Successfully submitted the survey. Thank you for your time."
end

post '/surveys' do
  @user = User.find(session[:id])
  @survey = @user.surveys.find(params[:id])
  @survey.questions.new(text: params[:question]) do |question|
        params[:choices].each do |choice|
          question.choices.new(choice_text: choice)
        end
  end
  @survey.save
  @survey.token
end

get '/surveys/:token' do
  @survey = Survey.find_by_token(params[:token])
  erb :"surveys/show"
end
