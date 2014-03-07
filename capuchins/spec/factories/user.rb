FactoryGirl.define do
  sequence :username do |n|
    "User #{n}"
  end

  factory :user do
    username
    password "password"
  end
end