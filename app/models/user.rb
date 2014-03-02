class User < ActiveRecord::Base
  validates_presence_of :username, :email, :password
  validates_uniqueness_of :username, :email
  validates_format_of :email, with: /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/
  validates_format_of :password, with: /^(?=.*\d).{4,10}$/

  has_many :forms
  has_many :entries

  before_save :encrypt

  def encrypt
    self.password = BCrypt::Password.create(self.password)
  end

  def correct_password?(string)
    hashed_password = BCrypt::Password.new(self.password)
    hashed_password == string
  end

end