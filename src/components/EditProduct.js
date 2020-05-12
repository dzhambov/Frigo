import React from 'react';
import ReusableForm from './ReusableForm';
import PropTypes from 'prop-types';

function EditProductForm(props) {
  const { product } = props;

  function handleEditProductFormSubmissioin(event) {
    event.preventDefault();
    props.onEditProduct({
      name: event.target.name.value,
      brand: event.target.brand.value,
      expiration: event.target.expiration.value,
      quantity: parseInt(event.target.quantity.value),
      price: event.target.price.value,
      id: product.id
    });
  }

  return (
    <React.Fragment>
      <h3>Edit Product</h3>
      <ReusableForm
        formSubmissionHandler={handleEditProductFormSubmissioin}
        buttonText='Update Product' />
    </React.Fragment>
  );
}

EditProductForm.propTypes = {
  onEditProduct: PropTypes.func
};

export default EditProductForm;
