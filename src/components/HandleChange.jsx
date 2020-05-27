import React from "react";

const HandleChange = ({ handleChange }) => {
  return (
    <div className="col col-6 col-lg-4">
      <input
        type="Number"
        defaultValue="1"
        className="form-control"
        onChange={handleChange}
      />
    </div>
  );
};

export default HandleChange;
