import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux'; //B1: import connect
import Cart from './../components/Cart';
import * as Message from './../constants/Message'
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import {actDeleteProductInCart, actChangeMessage} from './../actions/index'

class CartContainer extends Component {
  render() {
    var {cart } = this.props;
    console.log(cart)
    return (
      //Len store lay state ve sau do truyen state vao products
      <Cart>
        {this.showCartItem(cart)}
        {this.showTotalAmount(cart)}
      </Cart>
    );
  }
  showCartItem = cart => {
  var {onDeleteProductInCart, onChangeMessage} = this.props
    var result = <tr>
                  <td>{Message.MSG_CART_EMPTY}</td>
                </tr>;
    if(cart.length > 0) {
      result = cart.map((item, index)=> {
        return (
          <CartItem 
            key={ index }
            item={item} 
            index = {index} 
            onDeleteProductInCart = {onDeleteProductInCart}
            onChangeMessage = {onChangeMessage}/>
        )
      })
    }
    return result;
  }

  showTotalAmount = cart => {
    var result = null;
    if(cart.length > 0) {
      result = <CartResult cart={cart} />
    }
    return result;
  }
}

//Kiem tra cac props ma component nhan vao: import PropType
CartContainer.propTypes = {
  cart: PropTypes.arrayOf(PropTypes.shape({
    product: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      inventory: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired
    }).isRequired,
    quantity: PropTypes.number.isRequired
  })
  ).isRequired
}

const mapStateToProps = state => {
  return {
    cart : state.cart
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDeleteProductInCart : (product) => {
      dispatch(actDeleteProductInCart(product));
    },
    onChangeMessage : (message) => {
      dispatch(actChangeMessage(message));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer); //B3: thuc hien connect