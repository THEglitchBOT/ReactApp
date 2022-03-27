import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Explore from './pages/Explore';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Cuisine from './pages/Cuisine';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/Explore" exact element={<Explore/>}/>
        <Route path="/About" exact element={<About/>}/>
        <Route path="/Cuisine" exact element={<Cuisine/>}/>
      </Routes>
      <Footer/>
      </Router>
    </div>
  );
}

export default App;
