import { IProduct } from '@/interface/IProduct'
import Image from 'next/image'
import React from 'react'

import styles from './Card.module.css'

interface IProps{
    product: IProduct
}

export const Card = ({product}: IProps) => {
  return (
    <div className={styles.container}>
       <div className={styles.content}>
       <div className={styles.containerImg}>
        <Image
            src={product.img}
            alt={product.name}
            className={styles.img}
            width={130}
            height={140}
            priority
            />
       </div>
        <div className={styles.description}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
        </div>
        <div className={styles.containerPrice}>
            <p>${product.price}</p>
        </div>
       </div>
        <div>
            <button>AGREGAR</button>
        </div>
    </div>
  )
}
