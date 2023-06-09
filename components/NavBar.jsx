import React from 'react'
import styles from '../styles/navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'


function NavBar() {
  return (
    <div className={styles.container}>
    <div className={styles.item}>
      <div className={styles.callButton}>
        <Image src="/img/telephone.png" alt="" width="32" height="32" />
      </div>
      <div className={styles.texts}>
        <div className={styles.text}>ORDER NOW!</div>
        <div className={styles.text}>012 345 678</div>
      </div>
    </div>  
    <div className={styles.item}>
      <ul className={styles.list}>
        <li className={styles.listItem} > <Link href={'/'} style={{textDecoration:'none'}}>HomePage</Link> </li>
        <li className={styles.listItem}> <Link href={'/product/1'}>Product</Link> </li>
        <li className={styles.listItem}>Menu</li>
        <Image src="/img/logo.png" alt="" width={160} height={69} />
        <li className={styles.listItem}>Events</li>
        <li className={styles.listItem}>Blog</li>
        <li className={styles.listItem}>Contact</li>
      </ul>
    </div>
    <div className={styles.item}>
      <div className={styles.cart}>
        <Image src="/img/cart.png" alt="" width={30} height={30} />
        <div className={styles.counter}>2</div>
      </div>
    </div>

    
  </div>
  )
}

export default NavBar
