import React from "react";
import Product from "./Product";
import PropTypes from "prop-types";
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'

function ProductList(props) {

  useFirestoreConnect([
    { collection: 'products' }
  ]);

  const products = useSelector(state => state.firestore.ordered.products);

  if (isLoaded(products)) {
    return (
      <React.Fragment>
        <hr/>
        {products.map((product) => {
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
            restockProduct={props.onRestockProduct} />
        })}
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading ...</h3>
      </React.Fragment>
    )
  }
}

ProductList.propTypes = {
  onProductSelection: PropTypes.func
};

export default ProductList;