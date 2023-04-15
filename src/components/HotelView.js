import { useEffect, useState } from "react";

function HotelView(props) {
    const [clicked, setClicked]=useState(false);

    const handleClicked =()=>{
        setClicked(true);
    }
    useEffect(()=>{
        if(clicked){
            props.setClickedId(props.hotel.id);
            props.hotel.visitors++;
            setClicked(false);
        }
    },[clicked,props]);
    return (
      <div className="hotel-view" onClick={handleClicked}>
        <img alt="hotel-img" src={props.hotel.photo1} />
        <div className="hotel-detail">
            <div>
                <h3>{props.hotel.hotel_name}</h3>
                <h5>{props.hotel.city}, {props.hotel.country}</h5>   
                <h5 className="star-rating">{props.hotel.star_rating} Star Rating from {props.hotel.number_of_reviews} users</h5> 
            </div>
            <div>
                <h5>Price/room: {props.hotel.rates_from} {props.hotel.rates_currency}</h5>
            </div>
        </div>
      </div>
    );
  }
  
  export default HotelView;
  