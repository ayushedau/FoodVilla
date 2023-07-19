import RestrauntCard from "./RestrauntCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body=()=>{

  const [allRestraunts,setAllRestraunts] = useState([]);
  const [filteredRestraunts,setFilteredRestraunts] = useState([]);
  const [searchText,setSearchText] = useState("");


  useEffect(()=>{
    getAllRestraunts();
    },[]
  );

  async function getAllRestraunts(){
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    //console.log(json);
    setAllRestraunts(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestraunts(json?.data?.cards[2]?.data?.data?.cards);
  }

  const isOnline = useOnline();
  if(!isOnline){
    return <h1>Seems like you are Offline...!!!</h1>;
  }

  if(!allRestraunts)
    return null;
  // if(filteredRestraunts?.length===0)
  //   return <h1>No Results Found..</h1>;
    
return allRestraunts?.length===0? 
(<Shimmer/>)
:(
  <>
    <div className="bg-orange-300 p-3 my-2">
      <input
        data-testid="search-input"
        type="text"
        className="my-2 mx-3 p-1 hover:bg-blue-100"
        placeholder="Search"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      />
      <button 
        data-testid="search-btn"
        className="bg-orange-500 rounded p-2"
        onClick={() =>{
            const data = filterData(searchText,allRestraunts);
            setFilteredRestraunts(data);

        }}
      >
        Search
      </button>
    </div>
    <div 
    data-testid = "res-list"
    className="flex flex-wrap">
      {
        filteredRestraunts.map((restraunt)=>{
          return (
            <Link to={"/restraunt/"+restraunt.data.id} key={restraunt.data.id}>
              <RestrauntCard {...restraunt.data}/>
            </Link>
          )
        })
      }
    </div>

    </>
  );
  }

export default Body;




// Chhindwara - https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.057437&lng=78.9381729&page_type=DESKTOP_WEB_LISTING
// Bhopal - https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&page_type=DESKTOP_WEB_LISTING