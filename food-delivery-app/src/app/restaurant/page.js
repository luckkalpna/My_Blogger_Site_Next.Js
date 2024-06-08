import React from 'react'
import RestaurantLogin from "../_components/restaurantLogin";
import RestaurantSignUp from '../_components/restaurantSignUp';

function Restaurant() {
  return (
    <>
    <h1>Restaurant Login/Signup Page</h1>
   <RestaurantLogin />
   <RestaurantSignUp />
    </>
  )
}

export default Restaurant
