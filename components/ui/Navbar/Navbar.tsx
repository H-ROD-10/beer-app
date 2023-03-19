import Image from 'next/image'
import React from 'react'
import styles from './Navbar.module.css'

export const Navbar = () => {
  return (
    <div className={styles.container}>

      <div className={styles.menu_logo_search_cart}>
        <Image
          src="/svg/menu.svg"
          alt="Beer-App Logo"
          width={24}
          height={24}
          priority
        />
        <Image
          src="/svg/logo.svg"
          alt="Beer-App Logo"
          width={43}
          height={30}
          priority
        />
      </div>

      <div className={styles.menu_logo_search_cart}>
        <Image
          src="/svg/search.svg"
          alt="Beer-App Logo"
          width={24}
          height={24}
          priority
        />
        <Image
          src="/svg/cart.svg"
          alt="Beer-App Logo"
          width={24}
          height={24}
          priority
        />

        <span className={styles.count}>
          5
        </span>
      </div>
      
    </div>
  )
}



