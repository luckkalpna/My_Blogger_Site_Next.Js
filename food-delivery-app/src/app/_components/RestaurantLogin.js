import React from "react";

const RestaurantLogin = () => {
  return (
    <>
      <h3>Login</h3>

      <div className="input-wrapper">
        <input className="input-field" type="text" placeholder="Enter emial id" />
      </div>

      <div className="input-wrapper">
        <input className="input-field" type="text" placeholder="Enter password" />
      </div>

      <div className="input-wrapper">
        <button className="button">Login</button>
      </div>
    </>
  );
};

export default RestaurantLogin;
