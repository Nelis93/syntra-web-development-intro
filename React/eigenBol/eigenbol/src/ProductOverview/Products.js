import React from "react";
import ProductCard from "./ProductCard";

export const productList = [
  { name: "apples", id: "1", price: "1", desc: "generic description" },
  { name: "bananas", id: "2", price: "1", desc: "generic description" },
  { name: "oranges", id: "3", price: "1", desc: "generic description" },
  { name: "coconuts", id: "4", price: "1", desc: "generic description" },
];
function Products(props) {
  console.log(`${props.products.length} in products`);
  const savedItems =
    JSON.parse(localStorage.getItem("products")) ?? props.products;
  return (
    <>
      <h1>Products</h1>
      <ul>
        {savedItems.map((product) => {
          return (
            <li key={product.id}>
              <ProductCard
                product={product}
                products={props.products}
                setProducts={props.setProducts}
                nav={`/${product.id}`}
                func={"Show Details"}
              ></ProductCard>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Products;
