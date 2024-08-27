import React from 'react'
import SingleProducts from './SingleProducts';

function Cart({value}) { 

  
  return (
   <div className=''>
    
   {
    value.map( singledata=>
       <SingleProducts
          key={singledata.id}
          singledata={singledata}
       >

       </SingleProducts>
    )
   }
   </div>
  )
}

export default Cart