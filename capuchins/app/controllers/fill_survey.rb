get '/survey/:token' do
  @survey = Survey.find_by_token(params[:token])
  erb :survey
end

post '/submit_survey/:survey_id' do
  p params
  @survey = Survey.find_by_id(params[:survey_id])
  @survey.questions.each do |question|
    Answer.create(response: params[:response[]], question_id: question.id )
  end
  redirect "/survey/#{@survey.token}"
end



# name="question[1]"
# name="question[2]"
# params[:question] = {
#   1: "fjjsdflkjfd",
#   2: "ljfdaljdfkls"
# }