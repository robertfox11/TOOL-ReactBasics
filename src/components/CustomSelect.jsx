import React from "react";
import BtnDeleteCart from "./BtnDeleteCart";
const CustomSelect = ({ product, cart, addCart, products, handleChange }) => {
  return (
    <div className="col mt-auto">
      <div className="row">
        <div className="col col-6 col-lg-4">
          <input
            type="Number"
            defaultValue="1"
            className="form-control"
            onChange={handleChange}
          />
        </div>
        <BtnDeleteCart
          key={product.id}
          product={product}
          cart={cart}
          addCart={addCart}
        />
      </div>
    </div>
  );
};

export default CustomSelect;
