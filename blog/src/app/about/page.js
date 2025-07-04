'use client'
// import Link from 'next/link'
import React from 'react'
import { useRouter } from "next/navigation";

export default function About() {
  const router = useRouter();
  const navigate = (name) =>{
    router.push(name)
  }
  return (
    <div>
      <h1>Here is my About Us page</h1>
      {/* <Link href="/">Go To Home Page</Link> */}
      <button onClick={()=>navigate('/')}>Go to Home Page</button>
    </div>
  )
}
