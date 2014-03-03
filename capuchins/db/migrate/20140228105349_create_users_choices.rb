class CreateUsersChoices < ActiveRecord::Migration
  def change
    create_table :users_choices do |t|
      t.belongs_to :choice
      t.belongs_to :user
      t.timestamps
    end
  end
end
