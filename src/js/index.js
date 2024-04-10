//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

SecondsCounter.PropTypes ={
    digitSix:PropTypes.number,
    digitFive:PropTypes.number,
    digitFour:PropTypes.number,
    digitThree:PropTypes.number,
    digitTwo:PropTypes.number,
    digitOne:PropTypes.number
}

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components

import SecondsCounter from "./component/SecondsCounter.js";

//render your react application
let seconds=0;
setInterval(()=>{
    const six = Math.floor(seconds/100000);
    const five = Math.floor(seconds/10000);
    const four = Math.floor(seconds/1000);
    const three = Math.floor(seconds/100);
    const two = Math.floor(seconds/10);
    const one = Math.floor(seconds/1);
    ReactDOM.render(<SecondsCounter digitOne={one} digitTwo={two} digitThree={three} digitFour={four} digitFive={five} digitSix={six} /> , document.querySelector("#app"));
    seconds++;
},1000);


