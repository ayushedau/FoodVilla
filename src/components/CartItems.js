import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../constants";
import { removeItem } from "../utils/cartSlice";

const CartItems = ({id,cloudinaryImageId,name,price,inStock}) =>{
  const dispatch = useDispatch();
  const handleRemoveItem =(id)=>{
    dispatch(removeItem(id));
  }
    return(
      <div className="w-56 rounded m-3 p-3 shadow-xl bg-orange-200">
        <img 
          src={IMG_CDN_URL + cloudinaryImageId}>
        </img>
        <h2 className="font-bold ">{name}</h2>
        <h3>{price}/-</h3>
        <h4>{inStock} left
        <button className="bg-red-400 m-2 border-black font-bold rounded-full w-6 h-6"
          onClick={()=>handleRemoveItem(id)}                    
        >-</button></h4>
      </div>
    );
  };
  
 export default CartItems; 