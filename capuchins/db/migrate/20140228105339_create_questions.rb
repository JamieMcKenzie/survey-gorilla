class CreateQuestion < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.belongs_to :survey
      t.text       :text, null: false
      t.timestamps
  end
end
