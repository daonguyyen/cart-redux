import React, { Component } from 'react';
import { connect } from 'react-redux'; //B1: import connect
import Products from './../components/Products'
import Product from '../components/Product';

class ProductsContainer extends Component {
  render() {
    var { products } = this.props;
    return (
      //Len store lay state ve sau do truyen state vao products
      <Products>
         {this.showProducts(products)}
      </Products>
    );
  }

  showProducts(products){
    var result = null;
    if(products.length > 0) {
      result = products.map((product, index)=> {
        return <Product key = {index} product = {product}/> //Truyen props product de vao component Product lay gia tri thong qua props 
      })
    }
    return result
  }
}

const mapStateToProps = state => {
  return {
    products : state.products // B2: products lay tu producer products
  }
}

export default connect(mapStateToProps, null) (ProductsContainer); //B3: thuc hien connect