get '/surveys/new' do
  erb :"surveys/new"
end

post '/submit_survey/:survey_id' do
  @survey = Survey.find_by_id(params[:survey_id])
  params[:response].each do |answer|
    Answer.create(response: answer[1], question_id: answer[0] )
  end
end

post '/surveys' do
  @survey = Survey.new(title: params[:title]) do |survey|
    params[:questions].each do |question|
      survey.questions.new(text: question)
    end
  end
  @survey.save
  return @survey.token
end

post '/' do

  "Successfully submitted the survey. Thank you for your time."

  #redirect "/survey/#{@survey.token}"
end

get '/surveys/:token' do
  @survey = Survey.find_by_token(params[:token])
  erb :view_survey
end
