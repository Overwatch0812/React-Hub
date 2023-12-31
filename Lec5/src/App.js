import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/header.js";
import Body from "./components/Body.js";
import Footer from "./components/Footer.js";



const App = () => {
  return (
    <>
      <Header key="head"/>
      <Body  key="body"/>
      <Footer key="foot" />
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
