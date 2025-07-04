'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function AboutStudent() {
  const router = useRouter()
  const naviagte = (name) =>{
    router.push(name)
  }
  return (
    <div>
      <h1>This is my nesting routing page which is inside the about us page</h1>
      <button href={()=>naviagte('/')}>Go To Home Page</button>
    </div>
  )
}
