import React from "react";
import ShoopingCart from "./ShoopingCart.jsx";
const ShoopingCartItem = ({ cart, addCart }) => {
  return (
    <div className="col shopping__cart__item">
      <div className="row flex-column">
        <div className="col">
          <div className="row">
            {/* <div className="col-12 col-xl-4 mb-3 mb-xl-0"> */}
            {/* <img className="shopping__cart__img" src={img_2} alt="" /> */}
            {/* </div> */}
            <div className="col-12 col-xl-8">
              <div className="row flex-column">
                {cart.length === 0 ? (
                  <p className="text-center">Su carrito está vacío</p>
                ) : (
                  cart.map((product) => (
                    <ShoopingCart
                      key={product.id}
                      product={product}
                      // cart={cart}
                      // addCart={addCart}
                    />
                  ))
                )}

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
                    {/* <div className="col col-6 col-lg-8">
                      <button type="btn" className="btn btn-dark">
                        Remove
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <hr />
        </div>
      </div>
    </div>
  );
};

export default ShoopingCartItem;
