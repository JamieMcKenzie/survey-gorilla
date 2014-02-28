class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.belongs_to :user
      t.belongs_to :option

      t.timestamps
    end
  end
end
