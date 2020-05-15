import React from 'react';
import NewProductForm from './NewProductForm';
import ProductList from './ProductList';
import ProductDetail from './ProductDetail';
import EditProduct from './EditProduct';
import EditProductForm from './EditProduct';

class ProductControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      masterProductList: [],
      selectedProduct: null,
      editing: false
    };
  }

  handleClick = () => {
    if(this.state.selectedProduct !== null) {
      this.setState({
        formVisibleOnPage: false,
        selectedProduct: null,
        editing: false
      });
    }else{
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddNewProductToList = (newProduct) => {
    const newMasterProductList = this.state.masterProductList.concat(newProduct);
    this.setState({
      masterProductList: newMasterProductList,
      formVisibleOnPage:false
    });
  }

  handleChangingSelectedProduct = (id) => {
    const selectedProduct = this.state.masterProductList.filter(product => product.id === id)[0];
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


  handleDeletingProduct = (id) => {
    const newMasterProductList = this.state.masterProductList.filter(product => product.id !== id);
    this.setState({
      masterProductList: newMasterProductList,
      selectedProduct: null
    });
  }

  handleEditProduct = () => {
    this.setState({editing: true});
  }

  handleEditingProductInList = (productToEdit) => {
    const editedMasterProductList = this.state.masterProductList.filter(product => product.id !== this.state.selectedProduct.id).concat(productToEdit);
    this.setState({
      masterProductList: editedMasterProductList,
      editing: false,
      selectedProduct: null
    });
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
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = 
      <NewProductForm 
      onNewProductCreation = {this.handleAddNewProductToList} />;
      buttonText = "Return to Product List"
    } 
    else {
      currentlyVisibleState = 
      <ProductList 
      productList = { this.state.masterProductList} onProductSelection={this.handleChangingSelectedProduct} />;
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

export default ProductControl;