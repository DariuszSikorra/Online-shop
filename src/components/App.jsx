import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";

import Navbar from "./Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import Basket from "./pages/Basket";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./Footer";

class App extends Component {
  state = {
    products: [],
    bestsellers: [],
    latelyWatched: [],
    basket: [],
    random: null,
  };

  componentWillMount = () => {
    fetch("http://localhost:8000/products")
    .then(res => res.json())
    .catch(err =>
      fetch("db.json")
      .then(res => res.json())
      .then(data => data.products)
      )
      .then(data => {
        this.setState({ products: data });
      })
  };

  handleQuantityChange = e => {
    //multiplay products in add to cart
    let oldProducts = this.state.products
    let products = oldProducts.map(product => 
      ( e.target.id === product.id ?
        { ...product, quantity: e.target.value }
        :
        { ...product, quantity: 1 }
        )
      )
    this.setState({
      products
    })
  };

  handleAddToBasket = id => {
    //connect with quantityChange handler
    //handle adding to bestsellers, take in mind  quantity of products
    //make quantity property in object, whitch send to basket and reset in App object
    const products = this.state.products;
    const filtredProduct = products.filter(product => product.id === id);
    this.setState({
      basket: this.state.basket.concat(filtredProduct)
    });
    console.log(this.state.basket);
  };

  handleRemoveFormBasket = () => {
    //delete items from basket
    //remove items from bestsellers array
  };

  handleModal = () => {
    //handle showind modal
    //handle adding to lastWatched, add to array by [ new , ...lastWatched]
  };


  handleBestsellers = () => {
    //handle choose 5 most buyed items from products object and push to bestsellers.
    //Maybe make clicker counter on buy, or buy in basket
  };

  handleLatelyWatched = () => {
    //handle choose 5 most clicked items from products object and push to latelyWatched.
    //Make click counter on modal.
  };

  render() {
    const {
      products,
      bestsellers,
      latelyWatched,
      basket, value
    } = this.state;

    return (
      <Router>
        <div className="App">
          <Navbar basket={this.state.basket} />
          <div className="page">
            <Switch>
              <Route
                path="/"
                exact
                render={props => (
                  <Home
                    {...props}
                    products={products}
                    bestsellers={bestsellers}
                    latelyWatched={latelyWatched}
                    handleAddToBasket={this.handleAddToBasket}
                    handleQuantityChange={this.handleQuantityChange}
                  />
                )}
              />
              <Route
                path="/products"
                render={props => (
                  <Products
                    {...props}
                    products={products}
                    handleAddToBasket={this.handleAddToBasket}
                    handleQuantityChange={this.handleQuantityChange}
                    value={value}
                  />
                )}
              />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/faq" component={FAQ} />
              <Route
                path="/basket"
                render={props => (
                  <Basket
                    {...props}
                    basket={basket}
                    handleRemoveFormBasket={this.handleRemoveFormBasket}
                  />
                )}
              />
              {/* <Route path="/login" component={Login} /> */}
              <Route component={ErrorPage} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
