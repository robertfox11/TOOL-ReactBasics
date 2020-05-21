import React from "react";
import "../App.scss";
import BtnAddCart from "./BtnAddCart";
import BtnDeleteCart from "./BtnDeleteCart";
// import ShoppingCartItem from "./components/ShoppingCartItem";

const ShoopingCart = ({ product, cart, addCart, products }) => {
  const { title, price, img, id } = product;
  // console.log(cart);
  return (
    <div className="col mb-4 d-flex flex-column product__card">
      <img className="product__img" src={img} alt="Product Img" />
      <div className="d-block">
        <h3 className="h5 product-name">{title}</h3>
        <p>{price}</p>
        {/* {products ? ( */}
        <BtnAddCart
          key={id}
          product={product}
          cart={cart}
          products={products}
          addCart={addCart}
        />
        {/* ) : (
          <BtnDeleteCart
            key={id}
            product={product}
            cart={cart}
            products={products}
            addCart={addCart}
          />
        )} */}
        ;
      </div>
    </div>
  );
};

export default ShoopingCart;
