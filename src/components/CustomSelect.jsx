import React, { Fragment } from "react";
import BtnDeleteCart from "./BtnDeleteCart";
import HandleChange from "./HandleChange";
import Error from "./Error.jsx";
const CustomSelect = ({
  product,
  cart,
  addCart,
  handleChange,
  error,
  count,
}) => {
  return (
    <Fragment>
      <div className="col mt-auto">
        {error ? (
          <Error message="el valor es incorrecto maximo hasta 10" />
        ) : null}
        <div className="row">
          <HandleChange handleChange={handleChange} count={count} />
          <BtnDeleteCart
            key={product.id}
            product={product}
            cart={cart}
            addCart={addCart}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default CustomSelect;
