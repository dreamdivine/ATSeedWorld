class ChangeTypeToKindOnListings < ActiveRecord::Migration[5.2]
  def change
    remove_column :listings, :type, :string
    add_column :listings, :kind, :string
    add_index :listings, :kind
  end
end
