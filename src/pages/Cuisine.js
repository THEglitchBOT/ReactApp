import Exploreitems from '../components/Cuisineitems';
import React from 'react';
import{CuisineList} from "../components/CuisineList"
import "../pages/Explore.css";


function Cuisine() {
  return (
    <div className='Explore'>
        <h1 className="Places">Top Cuisines of Assam</h1>
        <div classname="placeList">
            {CuisineList.map((placeItem,key)=>{
                return (
                <Exploreitems
                 key={key}
                 image={placeItem.image} 
                 name={placeItem.name} 
                 para={placeItem.para}
                 />
                );
            })}
        </div>
    </div>
  );
}

export default Cuisine;
