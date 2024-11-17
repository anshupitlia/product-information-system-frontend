import React, { Component } from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './components/ProductList';
import Product from "./components/Product";

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/api/v1/products' exact={true} component={ProductList}/>
            <Route path='/api/v1/products/:sku' component={Product}/>
          </Switch>
        </Router>
    )
  }
}
export default App;