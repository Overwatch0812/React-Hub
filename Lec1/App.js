const left = React.createElement(
  "div",
  {
    className: "left",
  },
  "G.O.A.T"
);
let List_items1 = React.createElement("li", {}, "item1");
let List_items2 = React.createElement("li", {}, "item2");
let List_items3 = React.createElement("li", {}, "item3");
const list = React.createElement(
  "ol",
  {
    className: "elem",
  },
  [List_items1,List_items2,List_items3]
);
const right = React.createElement(
  "div",
  {
    className: "right",
  },
  [list]
);
const container = React.createElement(
  "div",
  {
    id: "main",
  },
  [left,right]
);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(container);
