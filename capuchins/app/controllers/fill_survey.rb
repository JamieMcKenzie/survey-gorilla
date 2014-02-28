get '/survey/:token' do
  @survey = Survey.find_by_token(params[:token])
  erb :survey
end

post '/submit_survey/:survey_id' do
  @survey = Survey.find_by_id(params[:survey_id])
  params[:response].each do |answer|
    Answer.create(response: answer[1], question_id: answer[0] )
  end
  redirect "/survey/#{@survey.token}"
end
