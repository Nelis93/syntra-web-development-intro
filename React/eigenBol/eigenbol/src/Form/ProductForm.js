import React, { useState, useReducer } from "react";

const ACTIONS = {
  ADD_PRODUCT: "add-product",
};

function newProduct(name, id, price, description) {
  return { name: name, id: id, price: price, desc: description };
}

const reducer = (products, action) => {
  switch (action.type) {
    case ACTIONS.ADD_PRODUCT:
      return [
        ...products,
        newProduct(
          action.payload.name,
          action.payload.id,
          action.payload.price,
          action.payload.description
        ),
      ];
    default:
      return products;
  }
};

function ProductForm(props) {
  const arrayIDs = props.products.map((prod) => prod.id).sort();
  const newID = (arrayIDs.length + 1).toString();
  const [products, dispatch] = useReducer(reducer, props.products);
  const [price, setPrice] = useState();
  const [name, setName] = useState();
  const [description, setDescription] = useState();

  function onFormSubmit(event) {
    event.preventDefault();

    dispatch({
      type: ACTIONS.ADD_PRODUCT,
      payload: {
        name: name,
        id: newID,
        price: price,
        description: description,
      },
    });
    setName("");
    setPrice("");
    setDescription("");
    props.setProducts(products);
    localStorage.setItem("products", JSON.stringify(products));
    console.log(`${products.length} in form`);
    event.target.reset();
  }
  return (
    <>
      <div>Product Form</div>
      <form onSubmit={onFormSubmit}>
        <input
          onChange={(event) => setName(event.target.value)}
          required
        ></input>
        <input
          onChange={(event) => setPrice(event.target.value)}
          type="number"
          required
        ></input>
        <input
          onChange={(event) => setDescription(event.target.value)}
          required
        ></input>
        <button type="submit">Add product</button>
      </form>
    </>
  );
}

export default ProductForm;
