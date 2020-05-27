import React from "react";
import Price from "./Price.jsx";

const TotalPrice = ({ products, cart, count }) => {
  // console.log(cart)
  return (
    <div className="d-flex justify-content-between">
      <h4 className="h5">Total</h4>
      {cart.map((product) => (
        <Price
          key={product.id}
          products={products}
          cart={cart}
          product={product}
          count={count}
        />
      ))}
    </div>
  );
};

export default TotalPrice;
