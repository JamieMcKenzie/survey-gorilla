class Option < ActiveRecord::Base
  belongs_to :question
  has_many :entries
end
