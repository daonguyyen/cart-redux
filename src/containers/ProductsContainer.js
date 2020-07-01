import React, { Component } from 'react';
import { connect } from 'react-redux'; //B1: import connect
import Products from './../components/Products'
import Product from '../components/Product';

class ProductsContainer extends Component {
  render() {
    var { products } = this.props;
    return (
      //Len store lay state ve sau do truyen state vao products
      <Products products = { products }/>
    );
  }
}

const mapStateToProps = state => {
  return {
    products : state.products // B2: products lay tu producer products
  }
}

export default connect(mapStateToProps, null) (ProductsContainer); //B3: thuc hien connect