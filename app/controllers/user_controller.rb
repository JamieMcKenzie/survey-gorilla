get '/login' do
  erb :login
end

post '/login' do
  auth_user(params)

  if logged_in?
    redirect "/"
  else
    redirect '/login'
  end
end

post '/logout' do
  session.clear
  redirect '/'
end

get '/logout' do
  erb :logout_confirm
end

get '/users/new' do
  erb :create_account
end

get '/users/:id' do
  redirect '/login' unless logged_in?
  @user = User.find(params[:id])
  @user_forms = Form.find_all_by_user_id(params[:id])
  erb :show_user
end

post '/users' do
  @user = User.create(params)
  session[:id] = @user.id
  redirect "/"
end

