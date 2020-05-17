import React from 'react';
import NewProductForm from './NewProductForm';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import EditProductForm from './EditProduct';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as a from './../actions';
// import Moment from'moment';
import { withFirestore } from 'react-redux-firebase';

class ProductControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: null,
      editing: false
    };
  }

  componentDidMount() {
    this.waitTimeUpdateTimer = setInterval(() =>
      this.updateProductElapsedTime(),
      3600000
    );
  }

  componentWillUnmount(){
    clearInterval(this.waitTimeUpdateTimer);
  }

  updateProductElapsedTime = () => {
    const { dispatch } = this.props;
    Object.values(this.props.masterProductList).forEach(product => {
      const newFormattedPassedTime = product.timeBought.fromNow(true);
      const action = a.updateTime(product.id, newFormattedPassedTime);
      dispatch(action);
    });
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

  handleAddNewProductToList = () => {
    const { dispatch } = this.props;
    const action = a.toggleForm();
    dispatch(action);
  }

  handleChangingSelectedProduct = (id) => {
    this.props.firestore.get({collection: 'products', doc: id}).then((product) => {
      const firestoreProduct = {
        name: product.get("name"),
        brand: product.get("brand"),
        expiration: product.get("expiration"),
        price: product.get("price"),
        quantity: product.get("quantity"),
        id: product.id    
      }
      this.setState({selectedProduct: firestoreProduct});
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

  // hendleRestockProduct = (item) => {
  //   const newProductList = this.state.masterProductList.filter(product => product.id !== item)[0];
  //   const newProductItem = {
  //     name: item.name,
  //   }
  //   const action = newProducList.concat(newProductItem);
  //   this.props.dispatch(action);
  // }

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
  
  handleEditingProductInList = () => {
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
    // masterProductList: state.masterProductList,
    formVisibleOnPage: state.formVisibleOnPage
  }
}
ProductControl = connect(mapStateToProps)(ProductControl);

export default withFirestore(ProductControl);