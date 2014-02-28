class CreateQuestion < ActiveRecord::Migration
  def change
    create_table :question do |t|
      t.belongs_to :survey
      t.text       :text, null: false
      t.timestamps
  end
end
