class AddNicknameToReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :nickname, :string, null:false
  end
end
