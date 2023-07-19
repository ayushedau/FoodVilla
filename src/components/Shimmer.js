import React from "react";

const Shimmer = () =>{
    return (
        <div className="flex flex-wrap" data-testid="shimmer">
            {Array(10).fill(" ").map((e,index)=>(
                <div className=" bg-orange-100 shadow-lg w-56 h-56 m-3" key={index}></div>
            ))}
        </div>
    );
};

export default Shimmer; 