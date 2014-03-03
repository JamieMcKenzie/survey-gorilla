class Choice < ActiveRecord::Base
  has_many   :users, through: :answers
  has_many   :answers
  belongs_to :question
end
