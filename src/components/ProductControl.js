import React from 'react';
import NewProductForm from './NewProductForm';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import EditProductForm from './EditProduct';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';
// import { act } from 'react-dom/test-utils';

class ProductControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedProduct !== null) {
      this.setState({
        selectedProduct: null,
        editing: false
      });
    } else {
      const { dispatch } = this.props;
      const action = a.toggleForm();
      dispatch(action);
    }
  }

  handleAddNewProductToList = (newProduct) => {
    const { dispatch } = this.props;
    const action = a.addProduct(newProduct);
    dispatch(action);
    const action2 = a.toggleForm();
    dispatch(action2);
  }

  handleChangingSelectedProduct = (id) => {
    const selectedProduct = this.props.masterProductList[id];
    this.setState({
      selectedProduct: selectedProduct
    });
  }

  handleUseProduct = (id) => {
    const currentSelectedProduct = this.state.masterProductList.filter(item => item.id ===id)[0];
    const newProductUse = currentSelectedProduct.quantity - 1;
    const newProduct = {...currentSelectedProduct, quantity: newProductUse}
    const oldProduct = this.state.masterProductList.filter(product => product.id !== id)
    this.setState({
      masterProductList: [...oldProduct, newProduct],
    });
  }

  handleRestockProduct = (id) => {
    const currentSelectedProduct = this.state.masterProductList.filter(item => item.id ===id)[0];
    const newProductStock = currentSelectedProduct.quantity + 1;
    const newProduct = {...currentSelectedProduct, quantity: newProductStock}
    const oldProduct = this.state.masterProductList.filter(product => product.id !== id)
    this.setState({
      masterProductList: [...oldProduct, newProduct],
    });
  }
  
  handleEditProduct = () => {
    this.setState({editing: true});
  }
  
  handleEditingProductInList = (productToEdit) => {
    const { dispatch } = this.props;
    const action = a.addProduct(productToEdit);
    dispatch(action);
    this.setState({
      editing: false,
      selectedProduct: null
    });
  }
  
  handleDeletingProduct = (id) => {
   const  { dispatch } = this.props;
   const action = a.deleteProduct(id);
   dispatch(action);
   this.setState({selectedProduct: null});
  }

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if(this.state.editing) {
      currentlyVisibleState = <EditProductForm product = {this.state.selectedProduct} 
      onEditProduct = {this.handleEditingProductInList} />
      buttonText = "Return to Product List";
    } 
    else if (this.state.selectedProduct != null) {
      currentlyVisibleState = 
      <ProductDetail
        product = {this.state.selectedProduct}
        onClickingDelete = {this.handleDeletingProduct}
        onClickingEdit = {this.handleEditProduct} />;
        buttonText = "Return to Product List";
    } 
    else if (this.props.formVisibleOnPage) {
      currentlyVisibleState = 
      <NewProductForm 
      onNewProductCreation = {this.handleAddNewProductToList} />;
      buttonText = "Return to Product List"
    } 
    else {
      currentlyVisibleState = 
      <ProductList 
      productList = { this.props.masterProductList} onProductSelection={this.handleChangingSelectedProduct}
      onUseProduct = {this.handleUseProduct} 
      onRestockProduct = {this.handleRestockProduct}/>;
      buttonText = "ADD PRODUCT";
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

ProductControl.propTypes = {
  masterProductList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    masterProductList: state.masterProductList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}
ProductControl = connect(mapStateToProps)(ProductControl);

export default ProductControl;