import React from "react";

const BtnDeleteCart = ({ product, cart, addCart }) => {
  const handleRemove = (id) => {
    const products = cart.filter((product) => product.id !== id);
    addCart(products);
  };
  return (
    <div className="col col-6 col-lg-8">
      <button
        type="btn"
        className="btn btn-dark"
        onClick={() => handleRemove(product.id)}
      >
        Remove
      </button>
    </div>
  );
};

export default BtnDeleteCart;
