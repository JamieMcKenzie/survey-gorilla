FactoryGirl.define do
  factory :user do
    username "admin"
    password "Shity1"
  end

  factory :surveys do
    title "first title"
    token "1234"
    user
  end

  factory :choices do
    choice_text "yes"
    question
  end

  factory :question do
    text "the answer is red"
    survey
  end

  factory :answer do
    choice
    user
  end
end