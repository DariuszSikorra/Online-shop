import React from "react";
import { Card } from "../../App.style";

const Container = props => {

  const products = props.products.map(product => {
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
        <input value={props.value} onChange={props.quantityChange} type="number" placeholder="ilość" />
        <button onClick={() => props.handleAddToBasket(product.id)}>Kup</button>
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

export default Container;
