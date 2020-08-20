import React from "react";
import ReactDom from "react-dom";
import HelloWorld from "./components/HelloWorld";


const newLocal = "app";
ReactDom.render(<HelloWorld />, document.getElementById(newLocal));