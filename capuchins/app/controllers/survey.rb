get '/surveys/new' do
  erb :"surveys/new"
end

post '/surveys/:survey_id/answers' do
  @survey = Survey.find_by_id(params[:survey_id])
  params[:response].each do |answer|
    Answer.create(response: answer[1], question_id: answer[0] )
  end

  "Successfully submitted the survey. Thank you for your time."
end

post '/surveys' do
  user = User.find(session[:id])
  @survey = Survey.new(title: params[:title]) do |survey|
    params[:questions].each do |question|
      survey.questions.new(text: question)
    end
  end
  @survey.save
  user.surveys << @survey
  return @survey.token
end

get '/surveys/:token' do
  @survey = Survey.find_by_token(params[:token])
  erb :"surveys/show"
end
