import { IMG_CDN_URL } from "../constants";

const RestrauntCard = ({cloudinaryImageId,name,cuisines,lastMileTravelString}) =>{
    return(
      <div className="w-56 rounded m-3 p-3 shadow-xl bg-orange-200">
        <img 
          src={IMG_CDN_URL + cloudinaryImageId}>
        </img>
        <h2 className="font-bold ">{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{lastMileTravelString} minutes</h4>
      </div>
    );
  };
  
 export default RestrauntCard; 