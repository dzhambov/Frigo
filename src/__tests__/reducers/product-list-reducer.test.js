import productListReducer from '../../reducers/product-list-reducer';

describe('productListReducer', () => {

  let action;

  const currentState = {
    1: { name: 'Milk',
    brand: 'Organic Valey',
    expiration: '5/15/2020',
    price: '$5',
    quantity: '1',
    id: 1 },
    2: { name: 'Eggs',
    brand: 'Free Range',
    expiration: '5/22/2020',
    price: '$4',
    quantity: '12',
    id: 2 }
  }

  const productData = {
    name: 'Milk',
    brand: 'Organic Valey',
    expiration: '5/15/2020',
    price: '$5',
    quantity: '1',
    id: 1
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(productListReducer({}, { type: null })).toEqual({});
  });

  test('Should seccessfully add new product data to masterProductList', () => {
    const { name, brand, expiration, price, quantity, id } = productData;
    action = { 
      type: 'ADD_PRODUCT',
      name: name,
      brand: brand,
      expiration: expiration,
      price: price,
      quantity: quantity,
      id: id
    };

    expect(productListReducer({}, action)).toEqual({
      [id]: {
        name: name,
        brand: brand,
        expiration: expiration,
        price: price,
        quantity: quantity,
        id: id
      }
    });
  });

  test('Should successfully delete a product', () => {
    action = {
      type: 'DELETE_PRODUCT',
      id: 1
    };
    expect(productListReducer(currentState, action)).toEqual({
      2: {
      name: 'Eggs',
      brand: 'Free Range',
      expiration: '5/22/2020',
      price: '$4',
      quantity: '12',
      id: 2 }
    });
  });
});