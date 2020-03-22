import React from 'react';
import './App.css';
import { Router, Link } from "@reach/router";
import ProductDetails from "./Components/Products/ProductDetails";
import ProductListRoute from "./Components/Products/ProductListRoute";


function App() {
  return (
    <div className="App">
      <h1> Product Manager </h1>
      <Router>
        <ProductDetails path="product/:id" />
        <ProductListRoute path="products/" />
      </Router>
    </div>
  );
}

export default App;
