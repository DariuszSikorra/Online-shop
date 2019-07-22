import React, { Component } from "react";
import { Card } from "../App.style";
import "./Page.scss";
// Separate Recommended, bestsellers and latelywatched to different components

class Home extends Component {
  state = {
    number: 5,
    recommended: [],
    indexOfRecommended: []
  };

  componentDidMount() {
    const { products } = this.props;
    const {number} = this.state
    
    const range = products.length;
    const indexOfRecommended = [];
    const recommended = [];
    for (let i = 0; i < number; i++) {
      indexOfRecommended.push(Math.floor(range * Math.random()));
    }
    indexOfRecommended.forEach(index => recommended.push(products[index]));
    this.setState({
      recommended,
      indexOfRecommended
    });
  }

  render() {
    const { recommended, indexOfRecommended } = this.state;
    const { handleAddToBasket, handleQuantityChange, products } = this.props;

    const recommendedProducts = products.map(product => {
      for (let i = 0; i < indexOfRecommended.length; i++) {
        if (product.id === recommended[i].id) {
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
                id={product.id}
                value={product.quantity}
                onChange={handleQuantityChange}
                type="number"
                placeholder="ilość"
                min="1"
              />
              <button onClick={() => handleAddToBasket(product.id)}>Kup</button>
            </Card>
          );
        }
      }
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
