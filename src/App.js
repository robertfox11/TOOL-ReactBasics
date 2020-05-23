import React, { useState, useEffect } from "react";

// import ShoppingCartItem from "./components/ShoppingCartItem";
import ShoopingCart from "./components/ShoopingCart.jsx";
import Aside from "./components/Aside.jsx";
// Render the products dinamically with a loop json
import prod from "./products";

function App() {
  //guardar en local Storage

  //Json lo pasamos useState lo metemos a la variable products
  const [products, saveProduct] = useState(prod);
  let prodLocalStorage = localStorage.getItem("cart");
  if (!prodLocalStorage) {
    prodLocalStorage = [];
  }
  //Creamos un array para agregar el carrito
  const [cart, addCart] = useState([]);
  useEffect(() => {
    if (prodLocalStorage) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.setItem("cart", JSON.stringify([]));
    }
    console.log("Documento listo");
  }, [cart]);
  // function handleRemove() {
  //   console.log("handleRemove");
  // }

  function handleChange() {
    console.log("handleChange");
  }
  return (
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
          // handleRemove={handleRemove}
        />
        {/* <ShoopingCart /> */}
      </div>
    </main>
  );
}

export default App;
