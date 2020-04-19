import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Appchild from "./Appchild";
const REACT_VERSION = React.version;

//version 5 for function
function App(props) {
  return (
    <div className="App">
      document.console.log("testing");

      <h3> this is app and {props.name} </h3>
      <h3>React version: {REACT_VERSION}</h3>
      <h3> Roll : {props.role} </h3>
      <h3> Sum : {props.sum} </h3>
      <h3> START RENDERING MULTIPLE COMPONET</h3>
      <Appchild name="parth" />
      <Appchild name="elishs" />
      <Appchild name="ayansh" />
      <h3> END RENDERING MULTIPLE COMPONET</h3>
    </div>
  );
}

export default App;

// there props.name not this.props.name in function
//import React from 'react'; elase error require is not Defined

//index.html - > index.js - > APP.js (3 child)
