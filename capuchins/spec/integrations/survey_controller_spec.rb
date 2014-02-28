require 'spec_helper'

describe 'Survey Controller' do

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

end