const RestaurentCard = (props) => {
    return (
      <div className="card">
        <img alt="name" src={props.restaurent.img} />
        <h1>{props.restaurent.name}</h1>
        <h2>{props.restaurent.cuisine.join(" ")}</h2>
        <p>{props.restaurent.Info}</p>
      </div>
    );
  };

export default RestaurentCard;