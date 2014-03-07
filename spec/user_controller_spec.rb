require 'spec_helper'

describe "User controller" do
  let(:attribs) { FactoryGirl.attributes_for(:user) }

  it "should create a new user and redirect" do
    expect { post '/users', attribs }.to change{User.count}.by(1)
  end

  it "should redirect upon creation of new user" do
    expect(post '/users', attribs).to be_redirect
  end

  # pending "Should create a session on successful login"

  it "should log in a valid user" do
    expect(post '/login', attribs).to be_redirect
  end

  # pending "Should not redirect on failed log in"

end
