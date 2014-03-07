describe "user controller" do

  let(:attribs) { FactoryGirl.attributes_for(:user) }

  it "should create a new user" do
    expect{post '/users/new', attribs}.to change{User.count}.by(1)
  end

  it "should create a new user" do
    expect(post '/users/login', attribs).to be_redirect
  end

  # it "should be a users profile" do
  #   expect{get '/users/2'}.to include("body")
  # end
#   get '/users/:id' do
#   @user = User.find(params[:id])
#   @surveys = @user.surveys
#   erb :"users/show"
# end

  it "should logout" do
    expect(delete '/logout').to be_redirect
  end

  it "should go to the home page" do
    expect(get '/').to be_ok
  end

end