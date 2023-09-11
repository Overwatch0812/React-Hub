import {RestaurantList} from "../constants.js"
import RestaurentCard1 from "./Card.js"


const Body = () => (
  <>
    {/* {
    RestaurantList.map((res,i)=>{
      return <RestaurentCard {...res} key={i}/>
    })
  } */}
    <div className="Card-box">
      {RestaurantList.map((res, i) => {
        return <RestaurentCard1 restaurent={res} key={i} />;
      })}
    </div>
  </>
);


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