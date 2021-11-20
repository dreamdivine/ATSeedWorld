class CreateListings < ActiveRecord::Migration[5.2]
  def change
    create_table :listings do |t|
      t.string :title, null: false
      t.string :category, null: false
      t.string :type, null: false
      t.float :price, null: false
      t.string :description, null: false
      t.integer :seed_count, null: false
      t.timestamps
    end
    add_index :listings, :title
    add_index :listings, :category
    add_index :listings, :type
  end
end
