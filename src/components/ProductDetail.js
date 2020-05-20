import React from 'react';
import PropTypes from 'prop-types';

function ProductDetail(props){
  const { product } = props;

  return(
    <div className="ProductDetails">
      <React.Fragment>
        <h1>Product Details:</h1>
        <hr />
        <h3>Product: <em>{product.name}</em></h3>
        <h3>Brand: <em>{product.brand}</em></h3>
        <h3>Expiration Date: <em>{product.expiration}</em></h3>
        <h3>Quantity Left: <em>{product.quantity}</em></h3>
        <h3>Price: <em>{product.price}</em></h3>
        <button onClick = { props.onClickingEdit }>Update Product</button>
        <button onClick = {() => props.onClickingDelete(product.id)}>Delete Product</button>
        <hr />
      </React.Fragment>
    </div>
  );
}

ProductDetail.propTypes = {
  product: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default ProductDetail;