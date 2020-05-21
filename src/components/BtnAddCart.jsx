import React from "react";

const BtnAddCart = ({ product, cart, addCart, products }) => {
  const handleAddToCart = (id) => {
    const product = products.filter((product) => product.id === id)[0];
    addCart([...cart, product]);
    console.log(cart);
  };
  return (
    <button
      className="btn btn-dark"
      onClick={() => handleAddToCart(product.id)}
    >
      Add to cart
    </button>
  );
};

export default BtnAddCart;
