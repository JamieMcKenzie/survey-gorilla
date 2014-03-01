helpers do
  def logged_in?
    !!session[:id]
  end

  def auth_user(params)
    user = User.find_by_username(params[:username])
    if user && user.password == params[:password]
        session[:id] = user.id
    end
  end

end