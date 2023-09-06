import React from "react";
import ReactDOM from "react-dom/client";

const left = React.createElement(
  "div",
  {
    className: "left",
    key:"LEFT"
  },
  "G.O.A.T"
);
let List_items1 = React.createElement("a", {
    href:"#",
    key:"a1"
}, "item1");
let List_items2 = React.createElement("a", {
    href:"#",
    key:"a2"
}, "item2");
let List_items3 = React.createElement("a", {
    href:"#",
    key:"a3"
}, "item3");
const list = React.createElement(
  "ol",
  {
    className: "elem",
    key:"LIST"
  },
  [List_items1,List_items2,List_items3]
);
const right = React.createElement(
  "div",
  {
    className: "right",
    key:"RIGHT"
  },
  [list]
);
const container = React.createElement(
  "div",
  {
    id: "main",
    sahil:"G.O.A.T"
  },
  [left,right]
);
console.log(list)

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(container);
