import React, { Component } from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import "./App.scss";
import Navbar from "./Navbar";
import Page from "./Page"
import Footer from "./Footer";



class App extends Component {
  state = { }

  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <Navbar />
          </header>
          {/* <img src="../images/firany.jpg" alt="Window"/> */}
          <section className="page">
            <Page />
          </section>
          <footer>
            <Footer />
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
