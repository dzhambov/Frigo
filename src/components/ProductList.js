import React from "react";
import Product from "./Product";
import PropTypes from "prop-types";

function ProductList(props) {
  
  return (
    <React.Fragment>
      <hr/>
      {props.productList.map((product) =>
       <Product 
        whenProductClicked = { props.onProductSelection }
        name={product.name}
        brand= {product.brand}
        expiration= {product.expiration}
        price= {product.price}
        quantity= {product.quantity}
        id={product.id}
        key={product.id}
        useProduct={props.onUseProduct}
        restockProduct={props.onRestockProduct}
        />
      )}
    </React.Fragment>
  );
}

ProductList.propTypes = {
  productList: PropTypes.array,
  onProductSelection: PropTypes.func
};

export default ProductList;