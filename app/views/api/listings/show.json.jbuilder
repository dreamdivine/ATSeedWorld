@listing.reviews.includes(:user).each do |review|
  json.reviews do 
    json.set! review.id do 
      json.partial! 'api/reviews/review', review: review
  end 
end

  json.users do 
    json.set! review.user.id do 
      json.extract! review.user, :id, :first_name
    end 
  end 
end 



json.partial! '/api/listings/listing', listing: @listing