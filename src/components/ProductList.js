import React from "react";
import Product from "./Product";
import PropTypes from "prop-types";

function ProductList(props) {
  
  return (
    <React.Fragment>
      <hr/>
      {Object.values(props.productList).map((product) => {
       return <Product 
        whenProductClicked = { props.onProductSelection }
        name={product.name}
        brand= {product.brand}
        expiration= {product.expiration}
        price= {product.price}
        quantity= {product.quantity}
        formattedPassedTime= {product.formattedPassedTime}
        id={product.id}
        key={product.id}
        useProduct={props.onUseProduct}
        restockProduct={props.onRestockProduct}
        />
      })}
    </React.Fragment>
  );
}

ProductList.propTypes = {
  productList: PropTypes.object,
  onProductSelection: PropTypes.func
};

export default ProductList;