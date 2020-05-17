import React from "react";
// import { v4 } from "uuid";
import { PropTypes } from "prop-types";
import ReusableForm from "./ReusableForm";
// import Moment from 'moment';
import { useFirestore } from 'react-redux-firebase';

function NewProductForm(props) {

  const firestore = useFirestore();

  function addProductToFirestore(event) {
    event.preventDefault();
    props.onNewProductCreation();
    return firestore.collection('product').add(
      {
        name: event.target.name.value,
        brand: event.target.brand.value,
        expiration: event.target.expiration.value,
        price: event.target.price.value,
        quantity: parseInt(event.target.quantity.value),
        // id: v4(),
        timeBought: firestore.FieldValue.serverTimestamp()
        // formattedPassedTime: new Moment().fromNow(true)
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