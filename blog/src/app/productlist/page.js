'use client'
import React, { useEffect, useState } from 'react'

export default function PageList() {
  const [product, setProduct] = useState([])

  useEffect(() => {
    async function fetchData() {
      let data = await fetch("https://dummyjson.com/products")
      data = await data.json();
      setProduct(data.products) // ✅ Use correct key
    }
    fetchData();
  }, [])

  return (
    <div>
      <h2>Product List</h2>
      {
        product.map((item) => (
          <h3 key={item.id}>Name: {item.title}, | Price: {item.price}</h3>
        ))
      }
    </div>
  )
}
