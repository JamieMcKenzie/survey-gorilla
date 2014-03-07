FactoryGirl.define do
  sequence :text do |n|
    "Question #{n}"
  end

  factory :question do
    text
    survey
  end
end