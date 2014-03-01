post '/entries' do
  entry1 = Entry.create(option_id: params[:option0], user_id: session[:id], form_id: params[:form_id]) 
  entry2 = Entry.create(option_id: params[:option1], user_id: session[:id], form_id: params[:form_id]) 
  form_id = params[:form_id]
  redirect to("/forms/#{form_id}/results/#{session[:id]}") 
end