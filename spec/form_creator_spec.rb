require 'spec_helper'

describe "FormCreator" do

  let(:attribs){FactoryGirl.attributes_for(:form)}
  let(:question_attribs){FactoryGirl.attributes_for(:question)}
  let(:option_attribs){FactoryGirl.attributes_for(:option)}

  it "should go to the home page get '/'" do
    expect(get '/').to be_ok
  end

  it "should go to a new forms page GET '/forms/new'" do
    expect(get '/forms/new').to be_ok
  end

  it "should display the proper page" do
    get '/forms/new'
    expect(last_response.body).to include("Create a new form bro!")
  end

  it "should post the new forms POST 'forms' " do
    expect(post '/forms', attribs).to be_redirect
    follow_redirect!
    # expect(last_response.body).to include(attribs[:title])
  end

  it "increases the form count if successful" do
    expect{post '/forms', attribs}.to change{Form.count}.by(1)
  end

  it "should increase the count of questions by 2" do
    expect{post '/forms', attribs.merge(question_attribs).merge(option_attribs)}.to change{Question.count}.by(2)
  end

  it "should increase the count of questions by 2" do
    expect{post '/forms', attribs}.to change{Option.count}.by(4)
  end
end
