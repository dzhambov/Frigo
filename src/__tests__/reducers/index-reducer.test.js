import rootReducer from '../../reducers/index';
import { createStore } from 'redux';
import formVisibleReducer from '../../reducers/form-visible-reducer';
import productListReducer from '../../reducers/product-list-reducer';
import * as c from './../../actions/ActionTypes';

let store = createStore(rootReducer);

describe('rootReducer', () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterProductList: {},
      formVisibleOnPage: false
    });
  });

  test('Check that initial state of productListReducer matches root reducer', () => {
    expect(store.getState().masterProductList).toEqual(productListReducer(undefined, { type: null }));
  });

  test('Check that initial state of formVisibleReducer matches root reducer', ()  => {
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, { type:null }));
  });

  // test('Check that initial state of productListReducer matches root reducer', () => { 
  //   const action = {
  //     type: c.ADD_PORDUCT,
  //     name: 'Milk',
  //     brand: 'Organic Farm',
  //     expiration: '5/15/2020',
  //     price: '$5',
  //     quantity: '1',
  //     id: 1
  //   }
  //   store.dispatch(action);
  //   expect(store.getState().masterProductList).toEqual(productListReducer(undefined, action));
  // });

  test('Check that initial state of formVisibleReducer matches root reducer', () => {
    const action = {
      type: c.TOGGLE_FORM
    }
    store.dispatch(action);
    expect(store.getState().formVisibleOnPage).toEqual(formVisibleReducer(undefined, action));
  });
});