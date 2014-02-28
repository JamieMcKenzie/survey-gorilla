get '/survey/:token' do
  @survey = Survey.find_by_token(params[:token])
  erb :view_survey
end

post '/submit_survey/:survey_id' do
  @survey = Survey.find_by_id(params[:survey_id])
  params[:response].each do |answer|
    Answer.create(response: answer[1], question_id: answer[0] )
  end

  "Successfully submitted the survey. Thank you for your time."

  #redirect "/survey/#{@survey.token}"
end

  #require 'pry'; binding.pry