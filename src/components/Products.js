import React, { Component } from 'react';
import Product from './Product';
import { connect } from 'react-redux';

class Products extends Component {
  render() {
    var { products } = this.props;
    return (
      <section className="section">
        <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
        <div className="row">
          {this.showProducts(products)}
        </div>
      </section>
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
    products : state.products //products lay tu producer products
  }
}

export default connect(mapStateToProps, null) (Products);