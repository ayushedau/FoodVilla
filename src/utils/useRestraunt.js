import { useState, useEffect } from "react";
import { REST_CDN_URL } from "../constants";

const useRestraunt = (id)=>{
    const [restraunt,setRestraunt] = useState(null);

    
    useEffect(()=>{
        getRestrauntInfo();
    },[]);

    
    async function getRestrauntInfo(){
        const data = await fetch(REST_CDN_URL+id);
        const json = await data.json();
        console.log(json);
        setRestraunt(json.data?.cards[0]?.card?.card?.info);
    }
    return restraunt;
};

export default useRestraunt;