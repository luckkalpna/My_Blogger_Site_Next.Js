"use client";
import Link from 'next/link'
import React from "react";
import { useRouter } from "next/navigation";
import './login.css'

export default function Login() {
  const router = useRouter();
  const navigate = (page) => {
    router.push("/login/" + page);
  };
  return (
    <div>
      <h1 className='heading'>This Main Login Page</h1>
      <Link href="/">Go To Home Page</Link>
      <br />
      <br />
      <button onClick={() => navigate("loginstudent")}>Go to Login Student Page</button>
      <br />
      <br />
      <button onClick={() => navigate("loginteacher")}>Go to Login Teacher Page</button>
    </div>
  );
}
