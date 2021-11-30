class Api::BasketItemsController < ApplicationController
    before_action :require_logged_in
    def index
        @basket_items = BasketItem.all
        render :index
    end

    def show
        @basket_item = BasketItem.find(params[:id])
        render :show
    end

    # def create
    #     @basket_item = BasketItem.new(basket_item_params)
    #     @basket_item.user_id = current_user.id

    #     if @basket_item.save
    #         render:show
    #     else
    #         render json: @basket_item.errors.full_messages, status: 422
    #     end
    # end

    def create
        current_user.basket_items.each do |basket_item|
            if basket_item.listing_id == (params[:basket_item][:listing_id]).to_i
                basket_item.quantity += (params[:basket_item][:quantity]).to_i
                basket_item.save!
                @basket_item = basket_item
                render :show
                return
            end
        end
            @basket_item = BasketItem.create(basket_item_params)
            if @basket_item.save!
                render :show
            else
                render :json ['Invalid Product'], status: 422
            end
    end

    def destroy
        @basket_item = BasketItem.find(params[:id])
        if @basket_item.destroy
            render :show
        else
            render json: @basket_item.errors.full_messages, status: 403
        end
    end

    def update
        @basket_item = BasketItem.find(params[:id])
        if @basket_item.update(basket_item_params)
            render :show
        else
            render json: @basket_item.errors.full_messages, status: 422
        end
    end

    private

    def basket_item_params
        params.require(:basket_item).permit(:user_id, :listing_id, :quantity)
    end

end