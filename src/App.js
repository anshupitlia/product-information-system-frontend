import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';

class App extends Component {
  state = {
    products: []
  };

  async componentDidMount() {
    const response = await fetch('/products');
    const body = await response.json();
    this.setState({products: body});
  }

  render() {
    const {products} = this.state;
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="App-intro">
              <h2>Products</h2>
              {products.map(product =>
                  <div key={product.sku}>
                    {product.title} ({product.price})
                  </div>
              )}
            </div>
          </header>
        </div>
    );
  }
}
export default App;