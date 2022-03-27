import React from "react";
import rhino from "../img,vid/rhino.jpg";
import "../pages/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${rhino})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT ASSAM</h1>
        <p>
        Assam, the land of wonders, is the best place to know the rich biodiversity of mother India. There are many tourist places in Assam. These places enhance the state as just more than a normal tourist attraction. They add beauty to the place. A place that is co-existing with nature will always feel and look beautiful. In that case, Assam is no exception. It is a place that no one should miss visiting at least once in their lifetime. Know the place more so that you can visit these places with some knowledge. Know more about the cultural backdrop of the state and the biodiversity present. Assam is one place where you will be able to see different sets of biodiversity and that is a major pulling factor of the tourists to the country. 
        </p>
        <h2>WHY VISIT ASSAM ?</h2>
        <p>
        To be a part of the euphoric festival celebration; check out one of the kind nature phenomena - river island at Majuli; sample scrumptious Machor Tenga and Duck Roast; visit the oldest temple in the history of India; go boat cruising on Brahmaputra river; purchase traditional silk garment and raft over ferocious Jia Bhorali River.
        </p>
      </div>
    </div>
  );
}

export default About;