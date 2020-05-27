import React from "react";
const Price = ({ product, count }) => {
  //   const { price } = product;
  let result = product.price * count;
  //   console.log(result);
  return (
    <h4>
      {/* <strong>{product.price}</strong> */}
      <strong>{result}</strong>
    </h4>
  );
};

export default Price;
