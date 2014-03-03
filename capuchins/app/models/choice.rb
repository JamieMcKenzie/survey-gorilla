class Choice < ActiveRecord::Base
  has_many   :users
  belongs_to :question
end
