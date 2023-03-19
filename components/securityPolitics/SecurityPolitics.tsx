import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './SecurityPolitics.module.css'

export const SecurityPolitics = () => {
  return (
    <section className={styles.container}>
          <Image
            src="/svg/instagram.svg"
            alt="Beer-App Logo"
            width={34}
            height={34}
            priority
          />

        <Link href={'/security'}>
          <p>POLITICA DE TRATAMIENTOS DE DATOS PERSONALES</p>
        </Link>
    </section>
  )
}
