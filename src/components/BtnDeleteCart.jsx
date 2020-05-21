import React from "react";

const BtnDeleteCart = ({ product, cart, addCart, products }) => {
  const handleRemove = (id) => {
    const products = cart.filter((product) => product.id !== id);
    //colocar los productos en el state
    // console.log(products);
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
