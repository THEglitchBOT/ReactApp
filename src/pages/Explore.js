import Exploreitems from '../components/Exploreitems';
import React from 'react';
import{PlaceList} from "../components/PlaceList"
import "../pages/Explore.css";


function Explore() {
  return (
    <div className='Explore'>
        <h1 className="Places">Places To Visit</h1>
        <div classname="placeList">
            {PlaceList.map((placeItem,key)=>{
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

export default Explore;
