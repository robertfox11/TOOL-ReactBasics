import React, { useState } from "react";
import ShoppingCartItem from "./ShoppingCartItem.jsx";
import TotalPrice from "./TotalPrice.jsx";

const Aside = ({ cart, addCart, products }) => {
  const [TotalPrecio, setTotalPrecio] = useState(0);
  // const [restante, setRestante] = useState(0);
  //validar cantidad
  const [count, saveCount] = useState(1);
  const [error, saveError] = useState(false);
  const handleChange = (e) => {
    e.preventDefault();
    console.log("hola has hecho un cambio", parseInt(e.target.value, 10));
    saveCount(parseInt(e.target.value, 10));
    if (count < 1 || count > 9 || isNaN(count)) {
      saveError(true);
      return;
    }
    saveError(false);
    // setTotalPrecio(count);
    // setRestante(count);
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
          setTotalPrecio={setTotalPrecio}
          handleChange={handleChange}
          count={count}
          error={error}
        />
        <TotalPrice
          products={products}
          cart={cart}
          TotalPrecio={TotalPrecio}
          handleChange={handleChange}
          count={count}
        />
      </div>
    </aside>
  );
};

export default Aside;
