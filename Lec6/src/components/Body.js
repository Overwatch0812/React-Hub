import { useEffect, useState } from "react";
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
  const [allRestaurantList, setAllRestaurantList] = useState('');
  const [filteredRestaurantList, setFilteredRestaurantList] = useState('');
  const filter = (searchInput, allRestaurantList) => {
    return allRestaurantList.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  };
  useEffect(()=>{
    fetchData();
  },[])
  async function fetchData(){
    const data=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&page_type=DESKTOP_WEB_LISTING');
    const json=await data.json();
    console.log(json);
    setAllRestaurantList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilteredRestaurantList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

// if(!allRestaurantList) return null;
if(!filteredRestaurantList) return <h1>Not found</h1>;


  return (allRestaurantList.length===0)?(<>
  <h1>data is fetching</h1>
  </>):(
    <>
      <input
        type="text"
        placeholder="Name"
        value={searchInput}
        onChange={(e) => {
          setSearchInput(e.target.value);
        }}
      />
      <button onClick={() => {
        const data1=filter(searchInput, allRestaurantList);
        setFilteredRestaurantList(data1)
      }}>Enter</button>
      <div className="Card-box">
        {filteredRestaurantList.map((res, i) => {
          return <RestaurentCard {...res.info} />;
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
