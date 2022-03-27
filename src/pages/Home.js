import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import trailer from '../img,vid/11.jpg'
import '../pages/Home.css'

function Home(){
    return(
        <div className="home" style={{ backgroundImage: `url(${trailer})` }}>
           
            <div className="headerContainer">
                <h1>Incredible Assam</h1>
                <p>The Journey is my Home</p>
                <Link to="/Explore">
                    <button>EXPLORE</button>
                </Link>
            </div>
        </div>
    )
}

export default Home;