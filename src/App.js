import React, { useState, useEffect, Fragment } from "react";
import ShoopingCart from "./components/ShoopingCart.jsx";
import Aside from "./components/Aside.jsx";
// Render the products dinamically with a loop json
import prod from "./products";

function App() {
  //Creamos un array para agregar el carrito
  const [products, saveProduct] = useState(prod);
  //guardar en local Storage
  let prodLocalStorage = JSON.parse(localStorage.getItem("cart"));
  if (!prodLocalStorage) {
    prodLocalStorage = [];
  }
  //Json lo pasamos useState lo metemos a la variable products
  const [cart, addCart] = useState(prodLocalStorage);
  useEffect(() => {
    let prodLocalStorage = JSON.parse(localStorage.getItem("cart", "count"));
    if (prodLocalStorage) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.setItem("cart", JSON.stringify([]));
    }
  }, [cart]);
  //Guardar cantidad

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
                    ></ShoopingCart>
                  ))}
                </div>
              </div>
            </section>
          </div>

          <Aside products={products} cart={cart} addCart={addCart} />
        </div>
      </main>
    </Fragment>
  );
}

export default App;
