import Login from "./components/login/login";
import Main from "./components/main/main";
import Shop from "./components/shop/shop";
import Product from "./components/shop/product";
import "./css/topbar.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";

function App() {
  return (
      <Router>
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={Main} />
        <Route path="/home" exact component={Main} />
        <Route path="/shop" exact component={Shop} />
        <Route path="/product" exact component={Product} />
      </Router>
  );
}

export default App;
