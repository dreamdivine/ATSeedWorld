json.extract! listing, :id, :description, :title, :price, :category, :type, :seed_count

if listing.photo.attachment == nil
   json.photoUrl = ""
else
   json.photoUrl url_for(listing.photo)
end

