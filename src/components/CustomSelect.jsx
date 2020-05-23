import React from "react";
import BtnDeleteCart from "./BtnDeleteCart";
const CustomSelect = ({ product, cart, addCart, products, handleRemove }) => {
  return (
    <div className="col mt-auto">
      <div className="row">
        <div className="col col-6 col-lg-4">
          <select defaultValue="2" className="custom-select">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
        </div>
        <BtnDeleteCart
          key={product.id}
          product={product}
          cart={cart}
          addCart={addCart}
          handleRemove={handleRemove}
        />
      </div>
    </div>
  );
};

export default CustomSelect;
