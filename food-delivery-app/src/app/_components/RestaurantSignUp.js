import React, { useState } from "react";

const RestaurantSignUp = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [c_password, setC_password] = useState("");

  const handleSignup=()=>{
    console.log(name, email, address, number, password, c_password)
  }
 

  return (
    <>
      <div className="container">
        <h3>SignUp</h3>

        <div className="input-wrapper">
          <input className="input-field" type="text" placeholder="Your name" value={name} onChange={(event) =>{setName(event.target.value)}}/>
        </div>

        <div className="input-wrapper">
          <input className="input-field" type="text" placeholder="Emial id" value={email} onChange={(event) =>{setEmail(event.target.value)}}/>
        </div>

        <div className="input-wrapper">
          <input className="input-field" type="text" placeholder="Address" value={address} onChange={(event) =>{setAddress(event.target.value)}}/>
        </div>

        <div className="input-wrapper">
          <input
            className="input-field"
            type="number"
            placeholder="phone number" value={number} onChange={(event) =>{setNumber(event.target.value)}}
          />
        </div>

        <div className="input-wrapper">
          <input
            className="input-field"
            type="password"
            placeholder="Enter password" value={password} onChange={(event) =>{setPassword(event.target.value)}}
          />
        </div>

        <div className="input-wrapper">
          <input
            className="input-field"
            type="password"
            placeholder="Confirm password" value={c_password} onChange={(event) =>{setC_password(event.target.value)}}
          />
        </div>

        <div className="input-wrapper">
          <button className="button" onClick={handleSignup}>Sign Up</button>
        </div>
        
      </div>
    </>
  );
};

export default RestaurantSignUp;
