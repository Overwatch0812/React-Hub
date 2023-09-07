import React from "react";
import ReactDOM from "react-dom/client";


const Header = () => {
  return (
    <div className="Head">
      <div className="left">
        <img
          alt="logo"
          src="https://exchange4media.gumlet.io/news-photo/95080-Swiggy.jpg?format=webp&w=768&dpr=1.3"
        />
      </div>
      <div className="right">
        <ol>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Cart</a></li>
        </ol>
      </div>
    </div>
  );
};
const Body=()=>(
  <>
  {/* {
  RestaurantList.map((res,i)=>{
    return <RestaurentCard {...res} key={i}/>
  })
} */}
<div className="Card-box">
  {
  RestaurantList.map((res,i)=>{
    return <RestaurentCard1 restaurent={res} key={i}/>
  })
}
</div>
  </>
)
const RestaurantList=
  [{
    "name":"Food Villa",
    "img":"https://img.freepik.com/free-photo/top-view-arrangement-with-food-wooden-background_23-2148308806.jpg?w=2000",
    "cuisine":["Ghass pus","Surya Good"],
    "Info":"Good for health"
  },
  {
    "name":"Saroj",
    "img":"https://img.freepik.com/free-photo/top-view-arrangement-with-food-wooden-background_23-2148308806.jpg?w=2000",
    "cuisine":["Ghass pus","Surya Good"],
    "Info":"Good for health"
  },
  {
    "name":"Sunny",
    "img":"https://img.freepik.com/free-photo/top-view-arrangement-with-food-wooden-background_23-2148308806.jpg?w=2000",
    "cuisine":["Ghass pus","Surya Good"],
    "Info":"Good for health"
  },]
   


// const RestaurentCard=({name,Info,cuisine,img})=>{
//   return (
//     <div className="card">
//       <img alt="name" src={img} />
//       <h1>{name}</h1>
//       <h2>{cuisine.join(" ")}</h2>
//       <p>{Info}</p>
//     </div>
//   );
// };
const RestaurentCard1=(props)=>{
  return (
    <div className="card">
      <img alt="name" src={props.restaurent.img} />
      <h1>{props.restaurent.name}</h1>
      <h2>{props.restaurent.cuisine.join(" ")}</h2>
      <p>{props.restaurent.Info}</p>
    </div>
  );
};


const App = () => {
  return (
    <>
      <Header />
      <Body />
      {/* <Footer /> */}
    </>
  );
};

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<App />);
