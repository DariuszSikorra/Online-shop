import React, { Component } from "react";
import "./Page.scss";
import SearchPanel from "./products/SearchPanel";

class Products extends Component {
  state = {
    products: [],
    search: "",
    sort: "Magicznie"
  };

  componentWillMount = () => {
    if (localStorage.getItem("cartItems")) {
      this.setState({
        cartItems: JSON.parse(localStorage.getItem("cartItems"))
      });
    }

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

  handleSearch = e => {
    this.setState({
      search: e.target.value
    });
  };
  render() {
    return (
      <div className="Products">
        <aside className="aside">
          <SearchPanel handleSearch={this.handleSearch} />
        </aside>
        <div className="Products">
          <p>pozycja -> kanapka z dokłądną kategorią</p>
        </div>
      </div>
    );
  }
}

export default Products;
