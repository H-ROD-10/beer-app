import { IProduct, IProducts } from '@/interface/IProduct'
import React from 'react'
import { Card } from '../card/Card'
import styles from './ListProducts.module.css'

interface IProps{
    data?: IProducts
    items?: IProduct[]
  }

export const ListProducts = ({data, items}: IProps) => {
  return (
    <section className={styles.container}>
        <h1 className={styles.title}>Cervezas</h1>
        <div className={styles.containerListCard}>
            {
              items?
              items?.map((product) => {
                return(
                    <Card product={product} key={product.name}/>    
                )
            }):
                data?.products.map((product) => {
                    return(
                        <Card product={product} key={product.name}/>    
                    )
                })
            }
        </div>
    </section>
  )
}
