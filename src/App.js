import React, { useState } from "react";

// import ShoppingCartItem from "./components/ShoppingCartItem";
import ShoopingCart from "./components/ShoopingCart.jsx";
import Aside from "./components/Aside.jsx";
// Render the products dinamically with a loop json
import prod from "./products";

function App() {
  //Json lo pasamos useState lo metemos a la variable products
  const [products, saveProduct] = useState(prod);
  //Creamos un array para agregar el carrito
  const [cart, addCart] = useState([]);
  // function handleRemove() {
  //   console.log("handleRemove");
  // }

  function handleChange() {
    console.log("handleChange");
  }
  const handleRemove = (id) => {
    console.log(id);
    // const products = cart.filter((product) => product.id !== id);
    // //colocar los productos en el state
    // // console.log(products);
    // addCart(products);
  };

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
                    handleRemove={handleRemove}
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
          handleRemove={handleRemove}
        />
        {/* <ShoopingCart /> */}
      </div>
    </main>
  );
}

export default App;
