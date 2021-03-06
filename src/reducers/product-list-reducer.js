import * as c from './../actions/ActionTypes';

export default (state = {}, action) => {
  const { name, brand, expiration, price, quantity, id, formattedPassedTime } = action;
  switch(action.type) {
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
        
      case c.UPDATE_TIME:
        const newProduct = Object.assign({}, state[id], {formattedPassedTime});
        const updatedState = Object.assign({}, state, {
          [id]: newProduct
        });
        return updatedState;
        default:
          return state;
  }
};