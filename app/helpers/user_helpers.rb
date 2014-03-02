helpers do
  def logged_in?
    !!session[:id]
  end

  def auth_user(params)
    user = User.find_by_email(params[:email])
    if user && user.correct_password?(params[:password])
        session[:id] = user.id
    end
  end

end