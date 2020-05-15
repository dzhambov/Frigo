import React from "react";
import { v4 } from "uuid";
import { PropTypes } from "prop-types";
import ReusableForm from "./ReusableForm";

function NewProductForm(props) {

  function handleNewProductFormSubmission(event) {
    event.preventDefault();
    props.onNewProductCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      expiration: event.target.expiration.value,
      price: event.target.price.value,
      quantity: parseInt(event.target.quantity.value),
      id: v4()
    });
  }

  return (
    <React.Fragment>
      <h3>Add New Product:</h3>
      <ReusableForm
      formSubmissionHandler={handleNewProductFormSubmission}
      buttonText = "Add Product" />
    </React.Fragment>
  );
}

NewProductForm.propTypes = {
  onNewProductCreation: PropTypes.func
};

export default NewProductForm;