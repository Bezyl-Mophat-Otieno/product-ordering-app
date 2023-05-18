

import React from 'react'
import styles from '../styles/productCard.module.css'
import Image from 'next/image'
import Link from 'next/link'

function ProductCard() {
  return (
    <div className={styles.container}>

    <Image src="/img/pizza.png" alt="" width="300" height="300" />
      <h1 className={styles.title}>FIORI DI ZUCCA</h1>
      <span className={styles.price}>$19.90</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>


    </div>
  )
}

export default ProductCard
