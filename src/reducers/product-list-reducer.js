import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, brand, expiration, price, quantity, id } = action;
  switch(action.type) {
    case c.ADD_PRODUCT:
      return Object.assign({}, state, {
        [id]: {
          name: name,
          brand: brand,
          expiration: expiration,
          price: price,
          quantity: quantity,
          id: id
        }
      });
      case c.USE_PRODUCT:
        return Object.assign({}, state, {
          [id]: {
            name: name,
            brand: brand,
            expiration: expiration,
            price: price,
            quantity: quantity,
            id: id
          }
        })
      case c.DELETE_PRODUCT:
        const newState = { ...state };
        delete newState[id];
        return newState;
      default:
      return state;
  }
};