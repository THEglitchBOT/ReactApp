import React, {useState} from 'react'
import { FaAffiliatetheme, FaRegFileCode } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import HomeIcon from '@mui/icons-material/Home';
import {Link} from 'react-router-dom'
import Logo from "../img,vid/logo1.png"
import "../components/Navbar.css"

function Navbar(){
    const [openLinks,setOpenLinks]=useState(false);


    const toggleNavbar=()=>{
        setOpenLinks(!openLinks)
    };
    return(
        <nav className="navbar">
            <div className="leftSide" id={openLinks?"open":"close"}>
                <img src={Logo}/>
                <div className="hiddenLinks">
                <Link to="/">Home</Link>
                <Link to="/Explore">Explore</Link>
                <Link to="/Cuisine">Cuisine</Link>
                <Link to="/About">About</Link>
                
                </div>
                </div>
           
            <div className="rightSide">
            <Link to="/">Home</Link>
            <Link to="/Explore">Explore</Link>
            <Link to="/Cuisine">Cuisine</Link>
            <Link to="/About">About</Link>
               

                <button onClick={toggleNavbar}>
                    <FaBars/>
                </button>
            </div>
        </nav>
        
    )
}

export default Navbar