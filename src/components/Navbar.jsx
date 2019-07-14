import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "./App.style";
import "./App.scss";

const Navbar = props => {
  const routes = [
    { to: "/", name: "Home" },
    { to: "/products", name: "Produkty" },
    { to: "/about", name: "O nas" },
    { to: "/contact", name: "Kontakt" },
    { to: "/faq", name: "Często zadawane  pytania" },
  ];
  return (
    <div className="navbar">
      <div className="navigation">
        {routes.map(route => {
          return (
            <NavLink key={route.to} className="button" to={route.to}>
              <Button>{route.name}</Button>
            </NavLink>
          );
        })}
      </div>
      <div className="loging">
        <NavLink key={"/basket"} to={"/basket"}>
          <Button>Koszyk{props.basket.length <= 0 ? null : `: (${props.basket.length})`}</Button>
        </NavLink>
        <NavLink key={"/login"} to={"/login"}>
          <Button onClick={() => {alert("placeholder, login not ready yet!")}}>Logowanie</Button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
