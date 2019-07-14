import React, { Component } from "react";
import "./Page.scss";
import SearchPanel from "./products/SearchPanel";
import Container from "./products/Container";

class Products extends Component {
  state = {
    search: "",
    sort: "Magicznie"
  };

  handleSearch = e => {
    //Connect to products array, use some sort methods
    this.setState({
      search: e.target.value
    });
  };

  render() {
    return (
      <div className="Products">
        <aside className="aside">
          <SearchPanel handleSearch={this.props.handleSearch} />
        </aside>
        <Container
          products={this.props.products}
          handleAddToBasket={this.props.handleAddToBasket}
          handleRemoveFormBasket={this.props.handleRemoveFormBasket}
          handleQuantityChange={this.props.handleQuantityChange}
        />
      </div>
    );
  }
}

export default Products;
