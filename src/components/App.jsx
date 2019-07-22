import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import "./App.scss";

import Navbar from "./Navbar";
import Loading from "./Loading";
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
    isLoaded: false,
    bestsellers: [],
    latelyWatched: [],
    basket: [],
    random: null
  };

  componentWillMount() {
    fetch("http://localhost:8000/products")
      .then(res => res.json())
      .catch(err =>
        fetch("db.json")
          .then(res => res.json())
          .then(data => data.products)
      )
      .then(data => {
        this.setState({
          products: data,
          isLoaded: true
        });
      });
  }

  handleQuantityChange = e => {
    let products = this.state.products.map(product =>
      e.target.id === product.id
        ? { ...product, quantity: e.target.value }
        : { ...product, quantity: [] }
    );
    this.setState({
      products
    });
  };

  handleAddToBasket = id => {
    //connect with quantityChange handler
    //handle adding to bestsellers, take in mind  quantity of products
    //make quantity property in object, whitch send to basket and reset in App object
    const { basket } = this.state;

    const products = this.state.products;
    const targetProduct = products.filter(product => product.id === id); // Object( [{...}] )
    this.setState({
      basket: basket.concat(targetProduct)
    });
    // for (let i = 0; i <= basket.length; i++) {
    //   // console.log(basket[i])
    //   // console.log(targetProduct[0])
    //   if (basket[i] !== targetProduct[0]) {
    //     //Sytuation when item is not in bucket and quantity is not present
    //     this.setState({
    //       basket: basket.concat(targetProduct)
    //     });
    //     console.log("gatcha!");
    //   } else if (targetProduct[0]) {
    //     //sytuation when item is not in bucket and quanntity is choosed
    //   } else if (basket[i].id === targetProduct[0].id) {
    //     //sytuation when item is in bucket, and quantity is not present
    //     console.log(basket[i]);
    //     console.log(targetProduct[0]);
    //     console.log("gatcha2!");
    //   } else {
    //     //sytuation when item is in bucket, and quantity is present
    //     console.log("gatcha3")
    //   }
    // }
  };

  handleRemoveFormBasket = id => {
    //remove items from bestsellers array
    const basket = this.state.basket;
    const targetProduct = basket.filter(product => product.id === id); // Object( [{...}] )
    basket.splice( basket.indexOf(targetProduct) ,1)
    console.log(targetProduct)
    this.setState({
      basket
    })
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
    const { products, bestsellers, latelyWatched, basket } = this.state;

    return (
      <Router>
        <div className="App">
          <Navbar basket={this.state.basket} />
          <div className="page">
            <Switch>
              {/*find correct way to put Redirect with props*/}
              <Route
                exact
                path="/"
                render={() =>
                  this.state.isLoaded ? (
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
                  ) : (
                    <Loading />
                  )
                }
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
