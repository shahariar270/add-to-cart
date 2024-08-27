import React from 'react'

function SingleProducts({singledata}) {
    const {name,price}=singledata;
    
      const remove=(e)=>{
        const finParent=e.target.parent
      }
    
  return (
    <div>
       <h5>{name}</h5>
       <h6>{price}</h6>
       <button onClick={remove} className='btn btn-warning'>remove item from cart</button>
       <hr className='border-3 border-danger' />







       
    </div>
  )
}

export default SingleProducts