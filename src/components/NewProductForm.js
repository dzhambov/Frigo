import React from "react";
import { PropTypes } from "prop-types";
import ReusableForm from "./ReusableForm";
import { useFirestore } from 'react-redux-firebase';


function NewProductForm(props) {

  const firestore = useFirestore();

  function addProductToFirestore(event) {
    event.preventDefault();
    props.onNewProductCreation();
    return firestore.collection('products').add(
      {
        name: event.target.name.value,
        brand: event.target.brand.value,
        expiration: event.target.expiration.value,
        price: event.target.price.value,
        quantity: parseInt(event.target.quantity.value),
        timeBought: firestore.FieldValue.serverTimestamp()
      }
    );
  }

  return (
    <React.Fragment>
      <h3>Add New Product:</h3>
      <ReusableForm
      formSubmissionHandler={addProductToFirestore}
      buttonText = "Add Product" />
    </React.Fragment>
  );
}

NewProductForm.propTypes = {
  onNewProductCreation: PropTypes.func
};

export default NewProductForm;