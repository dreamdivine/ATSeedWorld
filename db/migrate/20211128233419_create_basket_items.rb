class CreateBasketItems < ActiveRecord::Migration[5.2]
  def change
    create_table :basket_items do |t|
      t.integer :user_id, null: false
      t.integer :listing_id, null: false
      t.integer :quantity, null: false
      t.timestamps
    end
      add_index :basket_items, :listing_id
      add_index :basket_items, :user_id
  end
end
