class Api::ListingsController < ApplicationController
  def index
    @listings = Listing.all
     render :index
 end

  def show
    @listing = Listing.find(params[:id])
  end

  def listing_params
    params.require(:listing).permit(
      :price,
      :title,
      :type,
      :photo,
      :description,
      :category,
      :seed_count
    )
  end

end