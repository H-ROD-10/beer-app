import Image from 'next/image'
import React from 'react'
import styles from './WineRedirect.module.css'

export const WineRedirect = () => {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
            <p>Sigue mercando</p>
            <h3>Vinos</h3>
        </div>
        <div>
            <Image
                src="/svg/arrow-right.svg"
                alt="Beer-App Logo"
                width={24}
                height={24}
                priority
            />
        </div>
    </div>
  )
}
