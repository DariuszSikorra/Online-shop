import React, {Component} from "react";
import { Card } from "../../App.style";

class Container extends Component {
// menage quantity changes in more than 2 cards in the same time
// put condition (about undefined) in input value

render() { 
  const products = this.props.products.map(product => {
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
        {/*
        Przenieść do modalu
        <p>
          Opis: {product.general.description.replace(/<\/?[^>]+(>|$)/g, "")}
        </p>
         */}
        <input id={product.id} value={product.quantity} onChange={this.props.handleQuantityChange} type="number" placeholder="ilość" min="1" />
        <button onClick={() => this.props.handleAddToBasket(product.id)}>Kup</button>
      </Card>
    );
  });
  return (
    <div className="Container">
      <h2>Produkty:</h2>
      <ul>{products}</ul>
    </div>
  );
};
}
export default Container;
