post '/entries' do
  taker = Entry.find_all_by_user_id_and_form_id(params[:form_id], session[:id])
  if taker.empty?
    params[:option].each_value do |option_id|
      Entry.create(option_id: option_id, user_id: session[:id], form_id: params[:form_id])
    end
  end
  form_id = params[:form_id]
  redirect to("/forms/#{form_id}/results/#{session[:id]}")
end