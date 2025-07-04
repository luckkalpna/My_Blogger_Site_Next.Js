import Link from 'next/link'
import React from 'react'

export default function StudentList() {
  return (
    <div>
      <h1>Dynamic Routing</h1>
      <ul>
        <li>
          <Link href="/studentlist/kalpana">Kalpana</Link>
        </li>
        <li>
          <Link href="/studentlist/rachna">Rachna</Link>
        </li>
        <li>
          <Link href="/studentlist/shreya">Shreya</Link>
        </li>
        <li>
          <Link href="/studentlist/anaya">Anaya</Link>
        </li>
      </ul>
    </div>
  )
}
