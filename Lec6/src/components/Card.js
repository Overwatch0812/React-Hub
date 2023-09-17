const RestaurentCard = (props) => {
    return (
      <div className="card">
        {/* <img alt="name" src={props.restaurent.info.img} /> */}
        <h1>{props.name}</h1>
        <h2>{props.cuisine}</h2>
        <p>{props.areaName}</p>
      </div>
    );
  };

export default RestaurentCard;