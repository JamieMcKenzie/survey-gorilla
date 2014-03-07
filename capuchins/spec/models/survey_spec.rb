describe Survey do

  context 'validations' do
    it { should validate_presence_of(:title) }
  end


  context 'associations' do
    it { should have_many(:questions) }
  end


end

describe Choice do

  context 'validations' do
    it { should validate_presence_of(:choice_text) }
  end

end