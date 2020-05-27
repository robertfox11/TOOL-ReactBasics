import React, { Fragment } from "react";
const Price = ({ product, count }) => {
  //   const { price } = product;
  let result = product.price * count;
  //   console.log(result);
  return (
    <Fragment>
      <h4>
        <strong>{result}</strong>
      </h4>
    </Fragment>
  );
};

export default Price;
