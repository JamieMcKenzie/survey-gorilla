enable :sessions

post '/users/login' do
  @user = User.find_by_username(params[:username])
  redirect 'users/#{@user.id}'
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
  unless current_user.id == params[:user_id]
    redirect '/'
  end
  @user = User.find(params[:user_id])
  erb :"users/show"
end