import React, { useState } from "react";
import ShoppingCartItem from "./ShoppingCartItem.jsx";
import TotalPrice from "./TotalPrice.jsx";

const Aside = ({ cart, addCart, products }) => {
  //validar cantidad
  const [count, saveCount] = useState(1);
  const [error, saveError] = useState(false);
  const handleChange = (e) => {
    e.preventDefault();
    saveCount(parseInt(e.target.value, 10));
    if (count < 1 || count > 9 || isNaN(count)) {
      saveError(true);
      return;
    }
    saveError(false);
  };
  return (
    <aside className="col col-6 col-lg-4 p-4">
      <div className="row flex-column">
        <div className="col shopping__cart__header">
          <h2 className="h3 mt-2">Shopping Cart</h2>
          <hr className="mb-3" />
        </div>
        <ShoppingCartItem
          cart={cart}
          addCart={addCart}
          handleChange={handleChange}
          count={count}
          error={error}
        />
        <TotalPrice
          products={products}
          cart={cart}
          handleChange={handleChange}
          count={count}
        />
      </div>
    </aside>
  );
};
//documentando App
export default Aside;
