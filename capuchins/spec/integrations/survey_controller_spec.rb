require 'spec_helper'

describe 'Survey Controller' do

  before(:all) do
    params = {
      user: {
        username: 'mister three',
        password: 'secret'
      },
      survey: {
        title: 'survey title'
      },
      question: {
        text: 'question text'
      },
      choice: {
        choice_text: 'choice a'
        }
    }
    @user = User.create(params[:user])
    @survey = @user.surveys.create(params[:survey])
    @question = @survey.questions.create(params[:question])
    @choice = @question.choices.create(params[:choice])
  end

  context 'make survey page' do
    it 'should exist' do
      get '/surveys/new'

      expect(last_response).to be_ok
    end

    it 'should include "Create Survey"' do
      get '/surveys/new'

      expect(last_response.body).to include("Create Survey")
    end
  end

  context 'post request to add question' do
    it 'should add a question to the database' do
      params = {
        id: @survey.id,
        question: "sample question",
        choices: ['a','b']
      }
      session = {
        'rack.session' => {id: 1} # User ID
      }
      expect{
        post('/surveys/questions',params, session)
      }.to change(Question, :count).by(1)
    end
  end

  context 'post request to complete survey submission' do
    it 'should return a link to the survey' do
      params = {
        id: @survey.id,
        question: "sample question",
        choices: ['a','b']
      }
      session = {
        'rack.session' => {id: 1} # User ID
      }
      post('/surveys',params,session)
      expect(last_response.body).to include "#{@survey.token}"
    end
  end

  context 'post to record users answers to survey' do
    it 'should add an answer to the database' do
      params = {
        id: @survey.id,
        question: "sample question",
        choices: [1]
      }
      session = {
        'rack.session' => {id: 1} # User ID
      }
      expect{
        post("/surveys/#{@survey.id}/answers",params, session)
      }.to change(Answer, :count).by(1)
    end
  end

end