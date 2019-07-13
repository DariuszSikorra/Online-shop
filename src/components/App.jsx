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
    recommended: [],
    bestsellers: [],
    latelyWatched: [],
    basket: []
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
      });
  };

  handleAddToBasket = e => {
    //connect with quantityChange handler
    //handle adding to bestsellers, take in mind  quantity of products
    const products = this.state.products;
    products.map(product => {
      if (e.target.id === product.id) {
      }
    });
  };

  handleRemoveFormBasket = () => {
    //delete items from basket
    //remove items from bestsellers array
  };

  handleQuantityChange = () => {
    //multiplay products in add to cart
  };

  handleModal = () => {
    //handle showind modal
    //handle adding to lastWatched, add to array by [ new , ...lastWatched]
  };

  handleRecommended = () => {
    //handle choose 5 random products from products object and push to recommended
  }
  
  handleBestsellers = () => {
    //handle choose 5 most buyed items from products object and push to bestsellers.
    //Maybe make clicker counter on buy, or buy in basket
  }

  handleLatelyWatched = () => {
    //handle choose 5 most clicked items from products object and push to latelyWatched.
    //Make click counter on modal.
  }

  render() {
    const {
      products,
      recommended,
      bestsellers,
      latelyWatched,
      basket
    } = this.state;

    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="page">
            <Switch>
              <Route
                path="/"
                exact
                render={props => (
                  <Home
                    {...props}
                    recommended={recommended}
                    bestsellers={bestsellers}
                    latelyWatched={latelyWatched}
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
                  />
                )}
              />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/faq" component={FAQ} />
              <Route path="/basket" render={props => (
                <Basket
                  {...props}
                  basket={basket}
                  handleRemoveFormBasket={this.handleRemoveFormBasket}
                />
              )} />
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
