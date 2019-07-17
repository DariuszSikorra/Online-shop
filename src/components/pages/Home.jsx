import React from "react";
import { Card } from "../App.style";
import "./Page.scss";
// Separate Recommended, bestsellers and latelywatched to different components

const Home = props => {
  
  //move generation of random number to App component, it need to be generated once per page refresh
  //maybe use useEffect method to generate number on component mounting
  //maybe dont push products to new variable, but just use products from state with choosed id
  const range = props.products.length;
  const newRecommended = [];
  const readyRecommended = [];
  for (let i = 0; i <= 4; i++) {
    newRecommended.push(Math.floor(range * Math.random()));
  }
  newRecommended.forEach(reco => readyRecommended.push(props.products[reco]));
  console.log(readyRecommended)

  const recommendedProducts = readyRecommended.map(product => {
    // Condition to render recommended only when data is aviable
    if (product != undefined) {
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
            onChange={props.handleQuantityChange}
            type="number"
            placeholder="ilość"
            min="1"
          />
          <button onClick={() => props.handleAddToBasket(product.id)}>
            Kup
          </button>
        </Card>
      );
    }
  });

  return (
    <div className="Page">
      <h3>Rekomendowane produkty:</h3> {/*Add random products by their index */}
      {recommendedProducts}
      <h3>Najczęściej kupowane</h3> {/*Add while click buy */}
      <h3>Ostatnio oglądane</h3> {/*Add while click on modal*/}
    </div>
  );
};

export default Home;
