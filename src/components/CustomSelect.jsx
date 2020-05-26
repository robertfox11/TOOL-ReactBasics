import React, { useState } from "react";
import BtnDeleteCart from "./BtnDeleteCart";
import Error from "./Error.jsx";
const CustomSelect = ({ product, cart, addCart }) => {
  //validar cantidad
  const [count, saveCount] = useState(1);
  const [error, saveError] = useState(false);
  const handleChange = (e) => {
    e.preventDefault();
    console.log("hola has hecho un cambio", parseInt(e.target.value));
    saveCount(parseInt(e.target.value));
    if (count < 1 || count > 9 || isNaN(count)) {
      saveError(true);
      return;
    }
    saveError(false);
  };
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
