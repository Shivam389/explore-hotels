
function DisplayUser(props) {
    
    return (
      <div className="displayUser">
        {props.isLoggedIn?<div className="content">
            <h2>Username: {props.user.username} </h2>
            <ul><h3>Draft Bookings:</h3>
                {<br/>}
                {props.user.bookings[0].draft.length>0?
                props.user.bookings[0].draft.map((item,i)=>{
                    return <li key={i}><b>{item.hotel_name}</b> from <b>{item.checkIn}</b> To <b>{item.checkOut}</b> reserving <b>{item.rooms}</b> room for <b>{item.amt}</b> USD per day.</li>
                }): <p>No Draft Booking</p>}
            </ul>
            <ul><h3>Confirm Bookings:</h3>
                {<br/>}
                {props.user.bookings[0].conf.length>0?
                props.user.bookings[0].conf.map((item,i)=>{
                    return <li key={i}><b>{item.hotel_name}</b> from <b>{item.checkIn}</b> To <b>{item.checkOut}</b> reserving <b>{item.rooms}</b> room for <b>{item.amt}</b> USD per day.</li>
                }):<p>No Confirm Booking</p>}
            </ul>
        </div>:null}
      </div>
    );
  }
  
  export default DisplayUser;
  