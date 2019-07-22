import React from "react";

const Basket = props => {
  console.log(props.basket)
  const products = props.basket.map(product => {
    let quantity = product.quantity
    return (
      <li key={product.id}>
        <p>
          <span>
            <img
              style={{ width: 100, height: 100 }}
              src={product.images.primary.large}
              alt={product.brand.name}
            />
          </span>
          <span>Nazwa produktu: {product.general.name}, </span>
          <span>ID produktu: {product.id}, </span>
          <span>Ilość produktów: {quantity}</span>
          <button onClick={() => props.handleRemoveFormBasket(product.id)}>Usuń</button>
        </p>
      </li>
    );
  });
  return (
    <div className="Container">
      <p>Zawartość koszyka:</p>
      <ul>{products}</ul>
    </div>
  );
};

export default Basket;
