import React from "react";
import Products from "./Products";
import ProductForm from "../Form/ProductForm";

import { useTheme, useThemeUpdate } from "../ThemeContext";

function Overview(props) {
  // localStorage.setItem(JSON.stringify(newProduct.id), { newProduct });
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();
  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#CCC",
    color: darkTheme ? "#CCC" : "#333",
  };
  console.log(`${props.products.length} in overview`);
  return (
    <>
      <button style={themeStyles} onClick={toggleTheme}>
        Dark/Light
      </button>
      <ProductForm
        style={themeStyles}
        products={props.products}
        setProducts={props.setProducts}
      />
      <Products
        style={themeStyles}
        products={props.products}
        setProducts={props.setProducts}
      />
    </>
  );
}

export default Overview;
