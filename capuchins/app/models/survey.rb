class Survey < ActiveRecord::Base
  has_many :questions
  before_create :generate_token

  def generate_token
  end
end
