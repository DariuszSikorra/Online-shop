import React from "react";
import "./App.scss";
import { Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import ErrorPage from "./pages/ErrorPage";

const Page = () => {
  const routes = [
    { to: "/", component: Home, exact: true },
    { to: "/products", component: Products, exact: true },
    { to: "/about", component: About, exact: true },
    { to: "/contact", component: Contact, exact: true },
    { to: "/faq", component: FAQ, exact: true },
    { to: null, component: ErrorPage, exact: false }
  ];
  return (
    <Switch>
      {routes.map(route => {
        return (
          <Route
            path={route.to}
            exact={route.exact}
            component={route.component}
          />
        );
      })}
    </Switch>
  );
};

export default Page;
