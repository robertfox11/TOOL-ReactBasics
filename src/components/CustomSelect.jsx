import React from "react";
import BtnDeleteCart from "./BtnDeleteCart";
import Error from "./Error.jsx";
const CustomSelect = ({ product, cart, addCart, handleChange, error }) => {
  return (
    <div className="col mt-auto">
      {error ? (
        <Error message="el valor es incorrecto maximo hasta 10" />
      ) : null}
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
