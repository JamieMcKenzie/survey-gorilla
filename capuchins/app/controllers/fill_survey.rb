get '/survey/:token' do
  @survey = Survey.find_by_token(params[:token])
  erb :survey
end

post '/' do

end
