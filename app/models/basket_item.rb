class BasketItem < ApplicationRecord
    validates :user_id, :listing_id, presence: true
    validates :quantity, inclusion: {in: 1..10, message: 'only from 1 to 10 is allowed'}, presence: true

    belongs_to :user,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :listing,
    foreign_key: :listing_id,
    class_name: :Listing
end