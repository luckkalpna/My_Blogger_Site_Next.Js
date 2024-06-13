import React from 'react'
import Link from 'next/link'
import styles from './restaurantheader.module.css'

const RestaurantHeader = () => {
  return (
    <>
    <div className={styles.header}>
    <div className='logo'>
        <Link href="/"><img style={{width:"60px"}} src="logo.jpg" alt="logo" /></Link>
    </div>
    <ul>
        <li>
            <Link href="/">Home</Link>
        </li>

        <li>
            <Link href="/">Login/SignUp</Link>
        </li>

        <li>
            <Link href="/">Profile</Link>
        </li>
    </ul>
    </div>
    </>
  )
}

export default RestaurantHeader
