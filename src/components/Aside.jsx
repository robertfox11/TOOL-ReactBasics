import React from "react";
import ShoppingCartItem from "./ShoppingCartItem.jsx";

const Aside = ({ cart, addCart }) => {
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
          //   title="Nike Runner 2000"
          //   price={88}
          //   img={img_1}
          //   handleRemove={handleRemove}
          //   handleChange={handleChange}
        />
        <div className="col shopping__cart__footer">
          <div className="row row-cols-1 flex-column">
            <div className="col">
              <div className="d-flex justify-content-between">
                <h4 className="h5">Total</h4>
                <h4>
                  <strong>306€</strong>
                </h4>
              </div>
              <hr />
            </div>
            <div className="col">
              <button type="btn" className="btn btn-primary btn-block btn-lg">
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Aside;
