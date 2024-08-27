import React, { useEffect, useState } from 'react'
import Products from './Products'

function Home({addtocart}) {
  
const  [product, setProducts] = useState([])

    useEffect(()=>{
    fetch('ProductsData.json')
    .then(res=>res.json())
    .then(data=> setProducts(data))
    },[])

  return (
   <div className='row justify-content-center text-center d-flex col-8'>
    {
        product.map(
          product=><Products
          key={product.id}
          product={product}
          addtocart={addtocart}
          ></Products>
        )
    }
</div>
  )
}

export default Home
