class User < ActiveRecord::Base
  # Remember to create a migration!
  has_many :forms
  has_many :entries
end
