import React from 'react'
import { NextResponse } from 'next/server'

export default function middleware(request) {
  return NextResponse.redirect(new URL("/login", request.url))  // Which Url is set for redirection
}

export const config={
  matcher: "/about/:path*",  // Which url need to redirect
}
