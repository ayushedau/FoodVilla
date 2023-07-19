import React, { useState } from 'react'

const Segment =({title, desc, isVisible, setIsVisible}) => {
  
  return(
      <div className="shadow-2xl m-5 p-3">
        <h1 className="font-bold">{title}</h1>
        
        { isVisible ?
        <div>
          <button className="shadow-md bg-orange-200 rounded" onClick={()=>{
            setIsVisible(false);
          }}>Hide</button>
          <p>{desc}</p>
        </div> 
        :
        <button className="shadow-md bg-orange-200 rounded" onClick={()=>{
          setIsVisible(true);
        }}>Show</button>
        }
      </div>
  );
};

const InstaMart = () => {
  const [visibleSegment,setVisibleSegment] = useState("about");
  return (
    <>
      <Segment title="About" desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose"
        isVisible={visibleSegment==="about"} 
        setIsVisible={(val)=>{
          {val ? setVisibleSegment("about"):setVisibleSegment("")}
        }}
      />
      <Segment title="College" desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose"
        isVisible={visibleSegment==="college"}
        setIsVisible={(val)=>{
          {val ? setVisibleSegment("college"):setVisibleSegment("")}
        }}
      />
      <Segment title="Ganda" desc="It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose"
        isVisible={visibleSegment==="ganda"}
        setIsVisible={(val)=>{
          {val ? setVisibleSegment("ganda"):setVisibleSegment("")}
        }}
      />
    </>
  );
}

export default InstaMart;
