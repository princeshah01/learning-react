import React from "react";
import ReactDOM from "react-dom/client";
// here we are importing react and reactdom from module i.e from nodemodules to use it

let root = ReactDOM.createRoot(document.getElementById("root")) ;

// let heading = React.createElement("h1",{},"this is heading") ;


const Parent = () => <h1>this is a heading by prince using functional component</h1> ;
let heading = (
<h1 className="headings">
{Parent()}
    this is prince using jsx </h1>
);

root.render(heading)  ;