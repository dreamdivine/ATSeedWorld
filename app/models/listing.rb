class Listing < ApplicationRecord
    validates :title, :category, :type, :price, :description, :seed_count
    validates :ensure_photo

    has_many_attached :photos


    def ensure_photo
            unless self.photo.attached? 
            errors[:photo] << "must be attached"   
            end
    end
end