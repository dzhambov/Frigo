import productListReducer from '../../reducers/product-list-reducer';
import * as c from './../../actions/ActionTypes';


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
    timeBought: 0,
    id: 1
  }

  test('Should return default state if there is no action type passed into the reducer', () => {
    expect(productListReducer({}, { type: null })).toEqual({});
  });

  test('Should successfully delete a product', () => {
    action = {
      type: c.DELETE_PRODUCT,
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

  test('Should add a formated wait time to product entry', () => {
    const { name, brand, expiration, price, quantity, timeBought, id } = productData;
    action = {
      type: c.UPDATE_TIME,
      formattedPassedTime: '1 hour',
      id: id
    };
    expect(productListReducer({ [id] : productData}, action)).toEqual({ 
      [id] : {
        name: name,
        brand: brand,
        expiration: expiration,
        price: price,
        quantity: quantity,
        timeBought: timeBought,
        id: id,
        formattedPassedTime: '1 hour'
      }  
    });
  });

  // test('Should successfully add a product to the product list that includes Moment-formatted passed time', () => {
  //   const { name, brand, expiration, price, quantity, timeBought,id } =productData;
  //   action = {
  //     type: c.ADD_PRODUCT,
  //     name: name,
  //     brand: brand,
  //     expiration: expiration,
  //     price: price,
  //     quantity: quantity,
  //     timeBought: timeBought,
  //     id: id,
  //     formattedPassedTime: new Moment().fromNow(true)
  //   };
  //   expect(productListReducer({}, action)).toEqual({
  //     [id] : {
  //       name: name,
  //       brand: brand,
  //       expiration: expiration,
  //       price: price,
  //       quantity: quantity,
  //       timeBought: timeBought,
  //       id: id,
  //       formattedPassedTime: 'an hour'
  //     }
  //   });
  // });
});