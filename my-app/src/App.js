import Login from "./components/login/login";
import Main from "./components/main/main";
import Shop from "./components/shop/shop";
import Product from "./components/shop/product";
import Cart from "./components/shop/cart";
import About from "./components/about/about";
import Checkout from "./components/shop/checkout";
import Notfound from "./components/main/notfound";
import Filter from "./filter";
import "./css/topbar.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import React from "react";

function App() {
  return (
    <Router>
      <Route path="/login" exact component={Login} />
      <Route path="/" exact component={Main} />
      <Route path="/home" exact component={Main} />
      <Route path="/shop" exact component={Shop} />
      <Route path="/product/:title" component={Product} />
      <Filter path="/cart" exact component={Cart} />
      <Route path="/about" exact component={About} />
      <Filter path="/checkout" exact component={Checkout} />
    </Router>
  );
}

export default App;
