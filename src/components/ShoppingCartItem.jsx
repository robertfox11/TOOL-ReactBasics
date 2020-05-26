import React from "react";
import ShoopingCart from "./ShoopingCart.jsx";
const ShoopingCartItem = ({ cart, addCart, handleChange, error }) => {
  return (
    <div className="col shopping__cart__item">
      <div className="row flex-column">
        <div className="col">
          <div className="row">
            <div className="col-12 col-xl-8">
              <div className="row flex-column">
                {cart.length === 0 ? (
                  <p className="text-center">Su carrito está vacío</p>
                ) : (
                  cart.map((product) => (
                    <ShoopingCart
                      key={product.id}
                      product={product}
                      cart={cart}
                      addCart={addCart}
                      handleChange={handleChange}
                      error={error}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <hr />
        </div>
      </div>
    </div>
  );
};

export default ShoopingCartItem;
