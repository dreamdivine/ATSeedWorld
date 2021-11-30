class Review < ApplicationRecord
  validates :rating, inclusion: {in: 1..5, message: 'only from 1 to 5 is allowed'}, presence: true
  validates :body, presence: true
  validates :rating, presence: true
  validates :nickname, presence: true

  belongs_to :listing,
  foreign_key: :listing_id,
  class_name: :Listing

  belongs_to :user,
  foreign_key: :user_id,
  class_name: :User


end
