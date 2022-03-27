import React from "react"


function Cuisineitems({image,name,para}){
    return(
        <div className="placeItem">
            <h1>{name}</h1>
            <div style={{backgroundImage: `url(${image})`}}></div>
            <p>{para}</p>
        </div>
    )
}

export default Cuisineitems