class User < ActiveRecord::Base
  has_many :surveys
  has_many :choices
  validates :username, uniqueness: true, presence: true
  validates_presence_of :password
end
