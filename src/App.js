import React, { useState, useEffect, Fragment } from "react";

// import ShoppingCartItem from "./components/ShoppingCartItem";
import ShoopingCart from "./components/ShoopingCart.jsx";
import Aside from "./components/Aside.jsx";
// Render the products dinamically with a loop json
import prod from "./products";

function App() {
  //Creamos un array para agregar el carrito
  const [products, saveProduct] = useState(prod);
  //validar cantidad
  const [count, saveCount] = useState(0);
  const [error, saveError] = useState(false);
  //guardar en local Storage
  let prodLocalStorage = JSON.parse(localStorage.getItem("cart"));
  if (!prodLocalStorage) {
    prodLocalStorage = [];
  }
  //Json lo pasamos useState lo metemos a la variable products
  const [cart, addCart] = useState(prodLocalStorage);
  useEffect(() => {
    let prodLocalStorage = JSON.parse(localStorage.getItem("cart"));
    if (prodLocalStorage) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.setItem("cart", JSON.stringify([]));
    }
  }, [cart]);
  //Guardar cantidad
  const handleChange = (e) => {
    console.log("hola has hecho un cambio", parseInt(e.target.value));
    saveCount(parseInt(e.target.value));
    if (count < 1 || count > 11 || isNaN(count)) {
      saveError(true);
      return;
    }
    saveError(false);
  };
  return (
    <Fragment>
      <main className="container-fluid">
        <div className="row">
          <div className="col col-6 col-lg-8 p-4">
            <section className="row row-cols-1">
              <div className="col">
                <h1 className="mb-4">Shop</h1>
              </div>
              <div className="col">
                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4">
                  {products.map((product) => (
                    <ShoopingCart
                      key={product.id}
                      product={product}
                      products={products}
                      cart={cart}
                      addCart={addCart}
                      saveProduct={saveProduct}
                      handleChange={handleChange}
                      // handleRemove={handleRemove}
                    ></ShoopingCart>
                  ))}
                </div>
              </div>
            </section>
          </div>
          <Aside
            products={products}
            cart={cart}
            addCart={addCart}
            handleChange={handleChange}
            // handleRemove={handleRemove}
          />
        </div>
      </main>
    </Fragment>
  );
}

export default App;
