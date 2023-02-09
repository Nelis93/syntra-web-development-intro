import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import ProductDetails from "./ProductOverview/ProductDetails.js";
import { productList } from "./ProductOverview/Products";
import Overview from "./ProductOverview/Overview.js";
import { ThemeProvider } from "./ThemeContext";

function App() {
  const [products, setProducts] = useState(productList);
  useEffect(() => {
    setProducts(products);
    console.log(`${products.length} in app`);
  }, [products]);

  return (
    <ThemeProvider>
      <Routes>
        <Route
          path="/"
          element={<Overview products={products} setProducts={setProducts} />}
        />
        <Route
          path="/:productId"
          element={
            <ProductDetails products={products} setProducts={setProducts} />
          }
        />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
