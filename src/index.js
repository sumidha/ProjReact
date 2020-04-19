import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import App from "./App";
import Baby from "./Baby";
import Appv6 from "./Appv6";
import EventHandler from "./EventHandler";
import FunctionClick from "./FunctionClick";


// ReactDOM.render(
//   <Baby name="Rahul from swindon" />,
//   document.getElementById("root")
// );

// ReactDOM.render(
// <App name="mumbai" role="1000" sum={100+500} /> ,
//   document.getElementById("root")
// );

// ReactDOM.render(
// <EventHandler name="elisha" roll="200" />,
//   document.getElementById("root")
// );

ReactDOM.render(
  <FunctionClick name="Rahul from swindon" />,
  document.getElementById("root")
);

// ReactDOM.render(<Appv6 />, document.getElementById("root")); //this us used for new version of funtion

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
