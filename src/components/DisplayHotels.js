import {useState } from "react";
import HotelView from "./HotelView";
import Booking from "./Booking";

function DisplayHotels(props) {
    const [clickedId,setClickedId]=useState(0);
    const [bookingClicked, setBookingClicked]=useState(false);

    const handleBooking=()=>{
        if(props.isLoggedIn){
            setBookingClicked(true);
        }else{
            alert("Please Login");
        }
    }
    return (
      <div className="hotelWindow">
        {bookingClicked? 
            <Booking 
                setBookingClicked={setBookingClicked}
                users={props.users}
                username={props.userpass.username}
                hotel={props.hotels[clickedId]}
            />
        :null}
        <div className="displayHotels">
            <div className="hotels">
                {props.hotels.map((hotel)=>{
                return <HotelView 
                hotel={hotel}
                key={hotel.id}
                setClickedId={setClickedId}/>
                })}
            </div>
            <div className="hotel-overview">
                <div className="display">
                    <div className="img-box">
                        <img alt="hotel-logo" src={props.hotels[clickedId].photo1} />
                        <p>{props.hotels[clickedId].star_rating} Star Rating from {props.hotels[clickedId].number_of_reviews} users</p>
                    </div>
                    <div>
                        <h2>{props.hotels[clickedId].hotel_name}</h2>
                        <p>Address: {props.hotels[clickedId].addressline1}</p>
                        <p>City: {props.hotels[clickedId].city}, {props.hotels[clickedId].country}</p>
                        <p>Zipcode: {props.hotels[clickedId].zipcode}</p>
                        <p><a href={props.hotels[clickedId].url} target="_blank" rel="noopener noreferrer">Visit us</a></p>
                    </div>
                    <div>
                        <h3>Price/room: {props.hotels[clickedId].rates_from} {props.hotels[clickedId].rates_currency}</h3>
                        <h3>Visitors: {props.hotels[clickedId].visitors}</h3>
                    </div>
                    <button onClick={handleBooking}>BOOK NOW</button>
                </div>
            </div>
        </div>
      </div>
      
    );
  }
  
  export default DisplayHotels;
  