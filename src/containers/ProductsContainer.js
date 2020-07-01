import React, { Component } from 'react';
import { connect } from 'react-redux'; //B1: import connect
import Products from './../components/Products'
import Product from '../components/Product';
import PropTypes from 'prop-types';
import { actAddToCart } from './../actions/index'

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
    var  { onAddToCart } = this.props
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <Product 
                    key={index} 
                    product={product}
                    onAddToCart = {onAddToCart} /> //Truyen props product de vao component Product lay gia tri thong qua props 
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
  ).isRequired
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
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer); //B3: thuc hien connect