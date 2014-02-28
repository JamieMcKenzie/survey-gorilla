class Survey < ActiveRecord::Base
  has_many :questions
  before_create :generate_token
  validates_presence_of :title

  def generate_token
    self.token = loop do
      random_token = SecureRandom.urlsafe_base64(nil, false)
      break random_token unless Survey.exists?(token: random_token)
    end
  end
end
