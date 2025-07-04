"use client";
// import Link from 'next/link'
import React from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  const navigate = (name) => {
    router.push(name);
  };
  return (
    <div>
      <h1>This is my login page here i am doing file based routing</h1>
      {/* <Link href="/">Go To Home Page</Link> */}
      <button onClick={() => navigate("/")}>Go to Home Page</button>
    </div>
  );
}
