class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :title
      t.string :url
      t.string :img
      t.integer :vues
      t.timestamps null: false
    end
  end
end
