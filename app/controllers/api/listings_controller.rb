class Api::ListingsController < ApplicationController
  def index
    @listings = Listing.all
     render :index
 end

  def show
    @listing = Listing.find(params[:id])
  end

  def create
   @listing = Listing.new(listing_params)
  
  if @listing.save!
    render :show
  else
    render json: @listing.errors.full_messages, status: 422
  end
   
  end

  def listing_params
    params.require(:listing).permit(
      :price,
      :title,
      :kind,
      :description,
      :category,
      :seed_count,
      photos: []
    )
  end

end