class Survey < ActiveRecord::Base
  has_many :questions
  before_create :generate_token
  validates_presence_of :title

  def generate_token
  end
end
