import Link from 'next/link'
import React from 'react'
import styles from './NavFooter.module.css'

export const NavFooter = () => {
  return (
    <section className={styles.container}>
      <Link href={'/about'}>
        <p>SOBRE NOSOTROS</p>
      </Link> 
        <Link href={'/covid'}>
          <p>MEDIDAS DE SEGURIDAD (COVID-19)</p>
        </Link>
        <Link href={'/mercar'}>
          <p>COMO MERCAR</p>
        </Link>
        <Link href={'/contact'}>
          <p>CONTACTACNOS</p>
        </Link>
        <Link href={'/geography'}>
          <p>ZONA DE COBERTURA</p>
        </Link>
    </section>
  )
}
