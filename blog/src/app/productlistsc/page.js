import React from 'react'

async function productList() {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products
}

export default async function productListSc() {
  let products = await productList();
  // console.log(products)
  return (
    <div>
      <h3>Product List For Server Side Component</h3>
      <br />
      {
        products.map((item) =>(
          <div>
            <h3>Name: {item.title}</h3>
          </div>
        ))
      }
    </div>
  )
}
