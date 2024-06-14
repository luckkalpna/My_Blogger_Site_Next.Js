import { useRouter } from "next/router";
import React, { useState } from "react";


const RestaurantSignUp = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [c_password, setC_password] = useState("");
  // const router = useRouter();

  const handleSignup = async ()=>{
    console.log(name, email, address, number, password, c_password);
    let result = await fetch("http://localhost:3000/api/restaurant", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, address, number, password })
    });

    result = await result.json();
    console.log(result);
    if (result.success) {
      alert("Restaurant Registered Successfully");
      const { result:user } = result;
      delete user.password;
      localStorage.setItem("restaurantUser", JSON.stringify(user));
      // router.push("/restaurant/dashboard");
    }
  };
  return (
    <>
      <div className="container">
        <h3>SignUp</h3>

        <div className="input-wrapper">
          <input className="input-field" type="text" placeholder="Your name" value={name} onChange={(event) =>{setName(event.target.value)}}/>
        </div>

        <div className="input-wrapper">
          <input className="input-field" type="email" placeholder="Email id" value={email} onChange={(event) =>{setEmail(event.target.value)}}/>
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
