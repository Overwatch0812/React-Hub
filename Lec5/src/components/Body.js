import { useState } from "react";
import { RestaurantList } from "../constants.js";
import RestaurentCard from "./Card.js";

{
  /* {
RestaurantList.map((res,i)=>{
  return <RestaurentCard {...res} key={i}/>
})
} */
}

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [restaurantList, setRestaurantList] = useState(RestaurantList);
  const filter = (searchInput, restaurantList) => {
    const data=searchInput.toLowerCase();
    return restaurantList.filter((restaurant) =>
      restaurant.name.includes(searchInput)
    );
  };

  return (
    <>
      <input
        type="text"
        placeholder="Name"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />
      {console.log(restaurantList)}
      <button onClick={() => {
        const data=filter(searchInput, restaurantList);
        setRestaurantList(data)
      }}>Enter</button>
      <div className="Card-box">
        {restaurantList.map((res, i) => {
          return <RestaurentCard restaurent={res} key={i} />;
        })}
      </div>
    </>
  );
};

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

export default Body;
