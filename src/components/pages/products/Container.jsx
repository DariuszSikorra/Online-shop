import React from "react";
import { Card } from "../../App.style";
import { useState } from "react";

const Container = props => {
  const [value, setValue] = useState(0);

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
        <input value={value} onChange={setValue} type="number" placeholder="ilość" />
        <button>Kup</button>
      </Card>
    );
  });
  return (
    <div className="Products">
      <h2>Produkty:</h2>
      <ul>{products}</ul>
    </div>
  );
};

export default Container;
