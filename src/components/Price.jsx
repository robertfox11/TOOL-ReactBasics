import React, { Fragment } from "react";
const Price = ({ product, count }) => {
  let result = product.price * count;
  return (
    <Fragment>
      <h4>
        <strong>{result}</strong>
      </h4>
    </Fragment>
  );
};

export default Price;
