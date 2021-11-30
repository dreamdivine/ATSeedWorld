export const fetchBasketItems = () =>
  $.ajax({
    method: "GET",
    url: "api/basket_items",
  });

export const fetchBasketItem = (basketItemId) =>
  $.ajax({
    method: "GET",
    url: `api/basket_items/${basketItemId}`,
  });

export const createBasketItem = (basketItem) =>
  $.ajax({
    method: "POST",
    url: "api/basket_items",
    data: {basketItem},
  });

export const updateBasketItem = (basketItem) =>
  $.ajax({
    method: "PATCH",
    url: `/api/basket_items/${basketItem.id}`,
    data: {basketItem}
  });

export const deleteBasketItem = (basketItemId) =>
  $.ajax({
    method: "DELETE",
    url: `api/basket_items/${basketItemId}`,
  });

