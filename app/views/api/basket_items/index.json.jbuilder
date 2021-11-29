@basket_items.each do |basket_item|
    json.set! basket_item.id do
        json.partial! "basket_item", basket_item: basket_item
    end
end
