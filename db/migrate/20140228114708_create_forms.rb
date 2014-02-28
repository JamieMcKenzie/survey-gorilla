class CreateForms < ActiveRecord::Migration
  def change
    create_table :forms do |t|
      t.string :title
      t.string :url
      t.belongs_to :user

      t.timestamps
    end
  end
end
