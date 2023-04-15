import {React, useState, useEffect, useRef} from "react";

function Booking(props) {
    const [cancel,setCancel]=useState(false);
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [rooms, setRooms] = useState('');
    const [confBook,setConfBook]=useState(false);
    const [dftBook, setDftBook]=useState(false);
    const [booking, setBooking]=useState({
        hotel_id:null,
        hotel_name:"",
        checkIn:null,
        checkOut:null,
        rooms:null,
        amt:null
    });

    const dateInputRef = useRef(null);

    const handleCheckIn = (e) => {
        setCheckIn(e.target.value);
    };
    const handleCheckOut = (e) => {
        setCheckOut(e.target.value);
    };
    const handleChange = (e) => {
        setRooms(e.target.value);
    }
    const handleCancel=()=>{
        setCancel(true);
    }

    const confirmBook=()=>{
        setBooking({
            hotel_id:props.hotel.id,
            hotel_name:props.hotel.hotel_name,
            checkIn:checkIn,
            checkOut:checkOut,
            rooms:rooms,
            amt:(props.hotel.rates_from)*(rooms)
        });
        setConfBook(true);
    }
    const draftBook=()=>{
        setBooking({
            hotel_id:props.hotel.id,
            hotel_name:props.hotel.hotel_name,
            checkIn:checkIn,
            checkOut:checkOut,
            rooms:rooms,
            amt:(props.hotel.rates_from)*(rooms)
        });
        setDftBook(true);
    }
    useEffect(() => {
        if(confBook){
            props.users.filter(p => p.username === String(props.username))[0].bookings[0].conf.push(booking);
            props.setBookingClicked(false);
        }
    },[confBook,props,booking]);

    useEffect(() => {
        if(dftBook){
            props.users.filter(p => p.username === String(props.username))[0].bookings[0].draft.push(booking);  
            props.setBookingClicked(false);
        }
    },[dftBook,props,booking]);

    useEffect(() => {
        if(cancel){
            props.setBookingClicked(false);
        }
    },[cancel,props]);

    return (
      <div className="booking-cover">
        <div className="booking-div">
            <button onClick={handleCancel}>X</button>
            <h2>Hotel Name:{props.hotel.hotel_name}</h2>
            <label>
                CheckIn: <input type="date" onChange={handleCheckIn} ref={dateInputRef} required/>
            </label>
            <label>
                CheckOut: <input type="date" onChange={handleCheckOut} ref={dateInputRef} required/>
            </label>
            <label>
                Rooms: <input type="number" onChange={handleChange} max={10} min={1} required/>
            </label>
            <h3>Total Amount: {(props.hotel.rates_from)*(rooms)} {props.hotel.rates_currency}/day</h3>
            <div className="buttons">
                <button onClick={draftBook}>Draft Booking</button>
                <button onClick={confirmBook}>Confirm Book</button>
            </div>
        </div>
      </div>
    );
  }
  
export default Booking;
  