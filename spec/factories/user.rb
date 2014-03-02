FactoryGirl.define do
  factory :user do
    username "admin"
    password "Shity1"
    email "email@gmail.com"
  end

  factory :form do
    title "first title"
    url "suttin"
    user
  end

  factory :entry do
    user
    option
  end

  factory :question do
    question "the answer is red"
    form
  end

  factory :option do
    answer "red"
    question
  end
end
