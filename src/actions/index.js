import * as c from './../actions/ActionTypes';

export const deleteProduct = id => ({
  type: c.DELETE_PRODUCT,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});

export const addProduct = (product) => {
  const { name, brand, expiration, price, quantity, id } = product;
  return {
    type: c.ADD_PRODUCT,
    name: name,
    brand: brand,
    expiration: expiration,
    price: price,
    quantity: quantity,
    id: id
  }
}

export const useProduct = (product) => {
  const { name, brand, expiration, price, quantity, id } =product;
  return {
    type: c.USE_PRODUCT,
    name: name,
    brand: brand,
    expiration: expiration,
    price: price,
    quantity: quantity,
    id: id
  }
}

export const updateTime = (id, formattedPassedTime) => ({
  type: c.UPDATE_TIME,
  id: id,
  formattedPassedTime: formattedPassedTime
});