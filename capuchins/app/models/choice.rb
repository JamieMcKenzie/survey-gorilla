class Choice < ActiveRecord::Base
  has_many   :users, through: :answers
  belongs_to :question
end
