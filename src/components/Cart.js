import React from 'react'
import CartItems from './CartItems';
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from '../utils/cartSlice';

const Cart = () => {
  const items = useSelector(store =>store.cart.items);
  const dispatch = useDispatch();
  const handleClearItems = ()=>{
      dispatch(clearCart());
  }
  return (
    <div>
      <div>
          <button  className="m-8 p-3 shadow-md bg-orange-200 rounded w-28" onClick={()=>
            handleClearItems()
          }>Clear Cart</button>
      </div>
      <div className="flex flex-wrap">
      {
        items.map((item)=>{
          return (
            <CartItems key={item.id} {...item}/>
          )
        })
      }
      </div>
    </div>
    
  )
}

export default Cart;
