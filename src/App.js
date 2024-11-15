import React, { Component } from 'react';
import './App.css';
import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './ProductList';
import Product from "./Product";

class App extends Component {
  render() {
    return (
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/products' exact={true} component={ProductList}/>
            <Route path='/products/:sku' component={Product}/>
          </Switch>
        </Router>
    )
  }
}
export default App;