import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () =>{
    return(
        <a href="/">
        <img 
            data-testid="logo"
            className="w-28 rounded-full"
            alt="App-logo" 
            src="https://i.pinimg.com/originals/4e/95/ff/4e95ff2406e7914e70cbbba6dd9c51d2.jpg">
        </img>
        </a>
    );
};


const Header = () =>{
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    const online = useOnline();
    const cartItems = useSelector(store =>store.cart.items);

    return(
    <div className="bg-orange-300 flex justify-between p-2 shadow-lg">
        <Title/>
        <div className="">
            <ul className="flex ">
                <li className="p-3 py-10">
                    <Link to="/">Home</Link>
                </li>
                <li className="p-3 py-10">
                    <Link to="/about">About</Link>
                </li>
                <li className="p-3 py-10">
                    <Link to="/contact">Contact</Link>
                </li>
                <li className="p-3 py-10">
                    <Link to="/instamart">InstaMart</Link>
                </li>
                <li className="p-3 py-10">
                    <Link to="/cart">Cart</Link>
                </li>

            </ul>
        </div>
        <div data-testid="cartItems" className="p-3 py-10">
            Cart Items - {cartItems.length}
        </div>
        <div data-testid="status" className="p-3 py-10 text-green-800 font-extrabold">
            {online?"Online":"Offline"}
        </div>
        <div className="m-8 p-3 shadow-md bg-orange-200 rounded">
            {isLoggedIn? (
            <button onClick={()=>setIsLoggedIn(false)}>Logout</button>
            ):(
            <button onClick={()=>setIsLoggedIn(true)}>Login</button>)}
        </div>
    </div>
)};

export default Header;