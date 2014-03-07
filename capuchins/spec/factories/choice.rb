FactoryGirl.define do
  sequence :choice_text do |n|
    "This is choice #{n}"
  end
  factory :choice do
    choice_text
    question
  end

end