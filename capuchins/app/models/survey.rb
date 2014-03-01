class Survey < ActiveRecord::Base
  has_many :questions
  belongs_to :user
  before_create :generate_token
  validates_presence_of :title
  validate :has_at_least_one_question

  def has_at_least_one_question
    errors.add(:questions, "needs at least one question") if self.questions.nil?
  end

  def generate_token
    self.token = loop do
      random_token = SecureRandom.urlsafe_base64(nil, false)
      break random_token unless Survey.exists?(token: random_token)
    end
  end
end
