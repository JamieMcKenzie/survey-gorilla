enable :sessions

post '/users/login' do
  @user = User.find_by_username(params[:username])
  session[:id] = @user.id
  redirect "users/#{@user.id}"
end

post '/users/new' do
  new_user = User.new(params)
  if new_user.valid?
    new_user.save
    session[:id] = new_user.id
    redirect "users/#{new_user.id}"
  else
    @invalid = new_user.errors.messages
    redirect '/'
  end

end

get '/users/:user_id' do
  @user = User.find(params[:user_id])
  @surveys = @user.surveys
  erb :"users/show"
end

delete '/logout' do
  session.clear
  redirect '/'
end