import React, { Component } from "react";
import { Card } from "../App.style";
import "./Page.scss";
// Separate Recommended, bestsellers and latelywatched to different components

class Home extends Component {
  state = {
    recommended: []
  };

  componentDidMount() {
    const range = this.props.products.length;
    const indexOfRecommended = [];
    const recommended = [];
    for (let i = 0; i <= 4; i++) {
      indexOfRecommended.push(Math.floor(range * Math.random()));
    }
    indexOfRecommended.forEach(index =>
      recommended.push(this.props.products[index])
    );
    this.setState({
      recommended
    });
  }

  render() {
    const recommendedProducts = this.state.recommended.map(product => {
      return (
        <Card key={product.id}>
          <img
            src={product.images.primary.large}
            alt="Zdjęcie produktu nie zostało załadowane"
            width="200px"
            height="200px"
          />
          <p>Nazwa produktu: {product.general.name}</p>
          <p>ID: {product.id}</p>
          <input
            value={product.quantity}
            onChange={this.props.handleQuantityChange}
            type="number"
            placeholder="ilość"
            min="1"
          />
          <button onClick={() => this.props.handleAddToBasket(product.id)}>
            Kup
          </button>
        </Card>
      );
    });

    return (
      <div className="Page">
        <h3>Rekomendowane produkty:</h3>{" "}
        {/*Add random products by their index */}
        {recommendedProducts}
        <h3>Najczęściej kupowane</h3> {/*Add while click buy */}
        <h3>Ostatnio oglądane</h3> {/*Add while click on modal*/}
      </div>
    );
  }
}

export default Home;
