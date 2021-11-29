class Api::BasketItemsController < ApplicationController
    before_action :require_logged_in
    def index
        @basket_items = Basket_Item.all
        render :index
    end

    def show
        @basket_item = Basket_Item.find(params[:id])
        render :show
    end

    def create
        @basket_item = Basket_Item.new(basket_item_params)
        @basket_item.user_id = current_user.id

        if @basket_item.save
            render:show
        else
            render json: @basket_item.errors.full_messages, status: 422
        end
    end

    def destroy
        @basket_item = Basket_Item.find(params[:id])
        if @basket_item.destroy
            render :show
        else
            render json: @basket_item.errors.full_messages, status: 403
        end
    end

    def update
        @basket_item = Basket_Item.find(params[:id])
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