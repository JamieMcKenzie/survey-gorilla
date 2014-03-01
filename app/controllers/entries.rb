post '/entries' do
  entry1 = Entry.create(option_id: params[:option0], user_id: 1, form_id: params[:form_id]) #add session_id for user_id
  entry2 = Entry.create(option_id: params[:option1], user_id: 1, form_id: params[:form_id]) #add session_id for user_id
  form_id = params[:form_id]
  redirect to("/forms/#{form_id}/results/1") #session[:id]
end