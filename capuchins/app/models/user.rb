class User < ActiveRecord::Base
  has_many :surveys
  validates :username, uniqueness: true, presence: true
  validates_presence_of :password
end
