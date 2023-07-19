import { useState, useEffect } from "react";
import { MENU_CDN_URL } from "../constants";

const useMenu = (id) =>{
    
    const [menu,setMenu] = useState(null);

    useEffect(()=>{
        getMenu();
    },[]);

    async function getMenu(){
        const data = await fetch(MENU_CDN_URL+id);
        const json = await data.json();
        console.log(json);
        setMenu(json.data);
    }
    return menu;
}

export default useMenu;