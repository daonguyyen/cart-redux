import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux'; //B1: import connect
import Product from '../components/Product';
import { actAddToCart, actChangeMessage } from './../actions/index';
import Products from './../components/Products';

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

  showProducts(products) {
    var result = null;
    var  { onAddToCart, onChangeMessage } = this.props
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <Product 
                    key={index} 
                    product={product}
                    onAddToCart = {onAddToCart} 
                    onChangeMessage = {onChangeMessage}/> //Truyen props product de vao component Product lay gia tri thong qua props 
      })
    }
    return result
  }
}

//Kiem tra cac props ma component nhan vao: import PropType
ProductsContainer.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired
    })
  ).isRequired,
  onChangeMessage : PropTypes.func.isRequired
}


const mapStateToProps = state => {
  return {
    products: state.products // B2: products lay tu producer products
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddToCart : (product) => {
      dispatch(actAddToCart(product, 1));
    },
    onChangeMessage :( message) => {
      dispatch(actChangeMessage(message))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer); //B3: thuc hien connect