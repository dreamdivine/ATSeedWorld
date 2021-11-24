json.extract! listing, :id, :description, :title, :price, :category, :kind, :seed_count, :average_rating, :review_ids 

x = listing.photos.map do |photo|
        url_for(photo)
    end

json.photos do 
    json.array! x
end