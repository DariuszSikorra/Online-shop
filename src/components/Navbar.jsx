import React from "react";
import { NavLink } from "react-router-dom";
import "./App.scss";

const Navbar = () => {
  const routes = [
    { to: "/", name: "Home" },
    { to: "/products", name: "Produkty" },
    { to: "/about", name: "O nas" },
    { to: "/contact", name: "Kontakt" },
    { to: "/faq", name: "Często zadawane  pytania" }
  ];
  return (
    <div className="Navbar">
      {routes.map(route => {
        return (
          <NavLink key={route.to} className="button" to={route.to}>
            {route.name}
          </NavLink>
        );
      })}
    </div>
  );
};

export default Navbar;
