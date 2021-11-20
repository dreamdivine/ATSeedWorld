class Listing < ApplicationRecord
    validates :title, :category, :kind, :price, :description, :seed_count, presence: true
    # validates :ensure_photo

    has_many_attached :photos


    # def ensure_photo
    #         unless self.photo.attached? 
    #         errors[:photo] << "must be attached"   
    #         end
    # end
end