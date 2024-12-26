import React from "react";
import ReactDOM from "react-dom/client";



const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
      React.createElement("h1",{},"Hello from React🚀!"),
      React.createElement("h1", {}, "Hello Wolrd From Me coming from child 1!"),
      React.createElement("h2", {}, "I am h2 tag from child 1"),
    ]),
  
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "Hello Wolrd From Me coming from child 2!"),
      React.createElement("h2", {}, "I am h2 tag from child 2"),
      React.createElement("h1",{},"I am coming through parcel!"),
    ]),
  ]);
  
  const heading = React.createElement("h1", {}, "Hello World from React1 !");
  const root = ReactDOM.createRoot(document.getElementById("root"));
  // root.render(heading);
  root.render(parent);
