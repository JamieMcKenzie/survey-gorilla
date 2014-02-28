class Question < ActiveRecord::Base
  # Remember to create a migration!
  belongs_to :form
end
