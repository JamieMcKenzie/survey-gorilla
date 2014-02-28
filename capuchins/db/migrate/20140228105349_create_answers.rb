class CreateAnswers < ActiveRecord::Migration
  def change
    create_table :answers do |t|
      t.text       :response
      t.belongs_to :question
      t.timestamps
  end
end
