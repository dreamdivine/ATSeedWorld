class Listing < ApplicationRecord
    validates :title, :category, :kind, :price, :description, :seed_count, presence: true
   

  has_many_attached :photos

  has_many :reviews,
  foreign_key: :listing_id,
  class_name: :Review



   
end