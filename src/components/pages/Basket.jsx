import React, { useState } from "react";
import {Card} from "../App.style"

const Basket = (props) => {
  const products = props.basket.map(product => {
    return (
      <Card key={product.id}>
        <p>{product.brand.name}</p>
      </Card>
    );
  });
  return (
    <div className="Container">
      <p>Zawartość koszyka:</p>
      <p>{products}</p>
    </div>
  );
};

export default Basket;
