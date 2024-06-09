import React from "react";

const RestaurantSignUp = () => {
  return (
    <>
      <div className="container">
        <h3>SignUp</h3>

        <div className="input-wrapper">
          <input className="input-field" type="text" placeholder="Your name" />
        </div>

        <div className="input-wrapper">
          <input className="input-field" type="text" placeholder="Emial id" />
        </div>

        <div className="input-wrapper">
          <input className="input-field" type="text" placeholder="City" />
        </div>

        <div className="input-wrapper">
          <input
            className="input-field"
            type="number"
            placeholder="phone number"
          />
        </div>

        <div className="input-wrapper">
          <input
            className="input-field"
            type="password"
            placeholder="Enter password"
          />
        </div>

        <div className="input-wrapper">
          <input
            className="input-field"
            type="password"
            placeholder="Confirm password"
          />
        </div>

        <div className="input-wrapper">
          <button className="button">Login</button>
        </div>
        
      </div>
    </>
  );
};

export default RestaurantSignUp;
