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
    name: 'Milk',
    brand: 'Organic Farms',
    expiration: '5/15/2020',
    price: '$5',
    quantity: '1',
    id: id
  }
}