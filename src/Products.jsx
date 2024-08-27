import React from 'react'

function Products({product,addtocart}) {
    const {name,image,description,price}=product
  return (

    <div class="w-25 col-md-6 col-lg-4 col-xl-3 m-3 card">
        <img src={image} class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title">{name}</h5>
            <p class="card-text">{description}</p>
            <p class="card-text">Price: {price}</p>
            <button onClick={()=>addtocart(product)} className='btn btn-info'>Add to cart</button>
        </div>
    
  </div>
  )
}

export default Products