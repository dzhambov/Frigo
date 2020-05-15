import * as actions from './../../actions';
import * as c from './../../actions/ActionTypes';

describe('help product actions', () => {
  it('deleteProduct should create DELETE_PRODUCT action', () => {
    expect(actions.deleteProduct(1)).toEqual({
      type: c.DELETE_PRODUCT,
      id: 1
    });
  });

  it('toggleForm should create TOGGLE_FORM action', () => {
    expect(actions.toggleForm()).toEqual({
      type: c.TOGGLE_FORM
    });
  });

  it('addProduct should create ADD_PRODUCT action', () => {
    expect(actions.addProduct({name: 'Milk',
    brand: 'Organic Farms',
    expiration: '5/15/2020',
    price: '$5',
    quantity: '1',
    id: 1})).toEqual({
      type: 'ADD_PRODUCT',
      name: 'Milk',
      brand: 'Organic Farms',
      expiration: '5/15/2020',
      price: '$5',
      quantity: '1',
      id: 1
    });
  });
});