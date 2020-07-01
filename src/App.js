import React, { Component } from 'react';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Header from './components/Header';
import Message from './components/Message';
import ProductsContainer from './containers/ProductsContainer';
import CartContainer from './containers/CartContainer';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <main id="mainContainer">
          <div className="container">
            <ProductsContainer/>
            <Message />
            <CartContainer />
          </div>
        </main>
        <Footer/>
      </div>
    );
  }
}

export default App;