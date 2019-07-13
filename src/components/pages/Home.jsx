import React from 'react';
import "./Page.scss"
// All of items filtred and cuted to 5 best siuted products per section. Use animation to make carusel.

const Home = () => {
  return (
    <div className="Page">
      <h3>Rekomendowane</h3> {/*Add random products by their index */}
      <h3>Najczęściej kupowane</h3> {/*Add while click buy */} 
      <h3>Ostatnio oglądane</h3> {/*Add while click on modal*/}
    </div>
  );
};

export default Home;
