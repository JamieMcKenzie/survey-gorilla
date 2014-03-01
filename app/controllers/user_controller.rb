get '/login' do
  erb :login
end

post '/login' do
  auth_user(params)

  if logged_in?
    redirect "/users/#{session[:id]}"
  else
    redirect '/login'
  end
end

post '/logout' do
  session.clear
  redirect '/'
end

get '/users/create' do
  erb :create_account
end

get '/users/:id' do
  @user = User.find(params[:id])
  erb :show_user
end

post '/users' do
  @user = User.create(params)
  session[:id] = @user.id
  redirect "/users/#{@user.id}"
end

