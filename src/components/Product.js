import React from 'react';
import PropTypes from 'prop-types';

function Product(props) {

  return (
    <React.Fragment>
      <div className="Product">
        <div className="ProductInfo" onClick = {() => props.whenProductClicked(props.id)}>
            <h2><em onClick={props.whenProductClicked}>{props.name}</em></h2>
            <h3><em>{props.brand}</em></h3>
            <h5><em>Expiration Date:</em> {props.expiration}</h5>
            <h5><em>Price: </em>{props.price}</h5>
            <h5><em>Quantity: </em> {props.quantity}</h5>
          </div>
          <div className="ProductButtons">
            {props.quantity <= 0 && 
            <p>Sorry, this Product is out of stock</p>
            }
            {props.quantity > 0 &&
            <button onClick={() => props.useProduct(props.id)}>Use</button>
            }
            <button onClick={() => props.restockProduct(props.id)}>Stock</button>
            <hr/>
          </div>
      </div>
    </React.Fragment>
  );
}

Product.propTypes = {
  useProduct: PropTypes.func,
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  expiration: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenProductClicked: PropTypes.func,
  formattedPassedTime: PropTypes.string
}

export default Product;