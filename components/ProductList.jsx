'use client'
import React from 'react'
import styles from '../styles/productList.module.css'
import ProductCard from './ProductCard'
import Link from 'next/link'
import axios from 'axios'
import { useState , useEffect } from 'react'


function ProductList() {
  const [products , setProducts] = useState(()=>{
    return JSON.parse(localStorage.getItem("products")) || []
  })

  useEffect(()=>{
  
    const fetchProducts = async () => {
  
      const res = await axios.get("http://localhost:3000/api/products")
      const arrayOfProducts = await res.data;
      localStorage.setItem("products", JSON.stringify(arrayOfProducts));
      setProducts(arrayOfProducts);

    }
 fetchProducts()
  },[])
  return (
  
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}>

      {
        products.map((product)=>{

          return <ProductCard key={product.id} product={product}/> 
        })
      }

     
      </div>
    </div>
  )
}



export default ProductList


