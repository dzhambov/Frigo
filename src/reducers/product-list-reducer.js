export default (state = {}, action) => {
  const { name, brand, expiration, price, quantity, id } = action;
  switch(action.type) {
    case "ADD_PRODUCT":
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
    default:
    return state;
  }
};