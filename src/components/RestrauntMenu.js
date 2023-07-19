import React from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../constants';
import Shimmer from './Shimmer';
import useRestraunt from '../utils/useRestraunt';
import useMenu from '../utils/useMenu';
import { useDispatch } from 'react-redux';
import { addItem } from '../utils/cartSlice';
const RestrauntMenu = () => {

    const { id } = useParams();
    const restraunt = useRestraunt(id);
    const menu = useMenu(id);
    const dispatch = useDispatch();
    const handleAddItem = (item)=>{
        dispatch(addItem(item));
    }
    return (!restraunt||!menu) ? <Shimmer/>:(
    <div className="flex p-4">
        <div>
            {/* <h1>Restraunt id: {id}</h1> */}
            <h2 className="font-bold text-3xl p-2">{restraunt?.name}</h2>
            <img className="p-2" src={IMG_CDN_URL+restraunt?.cloudinaryImageId}/>
            <h3 className="text-xl p-1">{restraunt?.areaName}</h3>
            <h3 className="text-xl p-1">{restraunt?.city}</h3>
            <h3 className="text-xl p-1">{restraunt?.avgRating}</h3>   
        </div>
        <div className="p-3">
            <h1 className="font-bold text-3xl">Menu</h1>
            <ul>
                {
                    Object.values(menu?.menu?.items).map((item)=>(
                        <li key={item.id}>
                            {item.name} 
                            <button className="bg-green-500 m-2 border-black font-bold rounded-full w-6 h-6"
                                onClick={()=>handleAddItem(item)}
                                
                            >+</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>
  );
};

export default RestrauntMenu;




        