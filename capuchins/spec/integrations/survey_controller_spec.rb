require 'spec_helper'

describe 'Survey Controller' do

  describe 'make survey page' do
    it 'should exist' do
      get '/surveys/new'

      expect(last_response).to be_ok
    end

    it 'should include "Create Survey"' do
      get '/surveys/new'

      expect(last_response.body).to include("Create Survey")
    end
  end

  describe 'post request to add question' do
  end

  describe 'post request to complete survey submission' do
  end

  describe 'generate URL token for survey' do
  end

  describe 'post to record users answers to survey' do
  end

end