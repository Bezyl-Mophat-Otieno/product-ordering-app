
'use client'
import React from 'react'
import { useState , useEffect} from 'react';
import Image from 'next/image';
import styles from '../../../styles/product.module.css'
import Link from 'next/link'
import axios from 'axios';
import {usePathname, useRouter , useSearchParams} from 'next/navigation'
function Product() {
const id = usePathname().split('/')[2]
const [size, setSize] = useState(0);
const [product, setProduct] = useState();


useEffect(()=>{

  const fetchProduct = async()=>{

     try {
    const res = await axios.get(`http://localhost:3000/api/products/${id}`)
    const productObject = res.data;
    setProduct(productObject)
    
  } catch (error) {
    console.log(error);
  }


  }

  fetchProduct()
},[id])


  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <Image src={product.image} style={{objectFit:"contain"}}fill alt="" />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{product.name}</h1>
        <span className={styles.price}>${product.prices[size]}</span>
        <p className={styles.desc}>{product.desc}</p>
        <h3 className={styles.choose}>Choose the size</h3>
        <div className={styles.sizes}>
          <div className={styles.size} onClick={() => setSize(0)}>
            <Image src="/img/size.png" fill       style={{objectFit:"cover"}} alt="" />
            <span className={styles.number}>Small</span>
          </div>
          <div className={styles.size} onClick={() => setSize(1)}>
            <Image src="/img/size.png" fill       style={{objectFit:"cover"}} alt="" />
            <span className={styles.number}>Medium</span>
          </div>
          <div className={styles.size} onClick={() => setSize(2)}>
            <Image src="/img/size.png" layout="fill" alt="" />
            <span className={styles.number}>Large</span>
          </div>
        </div>
        <h3 className={styles.choose}>Choose additional ingredients</h3>
        <div className={styles.ingredients}>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">Double Ingredients</label>
            {
            product.options.map((option)=>{
return (          <div className={styles.option}>
            <input
              className={styles.checkbox}
              type="checkbox"
              id={option.option}
              name={option.option}
            />
            <label htmlFor="cheese">{option.option}</label>
          </div>)

            })
          }
          </div>

        </div>
        <div className={styles.add}>
            <input type="number" defaultValue={1} className={styles.quantity}/>
            <button className={styles.button}><Link href={'/cart'}> Add to Cart</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Product
