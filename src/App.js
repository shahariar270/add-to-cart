import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Home';
import Cart from './Cart';
import { useState } from 'react';

function App() {
  const [cart,setCart]=useState([]);

const addtocart=(value)=>{
  const newValue=[...cart,value]
  setCart(newValue);
}
  
  return (
   <div className='d-flex col-12'>
     
    <Home
    addtocart={addtocart}
    >
    </Home>
<Cart
    value={cart}
>

</Cart>
   </div>
  );
}

export default App;
