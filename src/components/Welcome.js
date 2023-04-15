function Welcome({showHotels}) {
  return (
    <div className="welcome">
      <div className="welcome-text">
        <div className="blank"></div>
        <h2>Planning your holidays?</h2>
        <h4 onClick={showHotels}>Checkout these hotels...</h4>
        <p>Book best hotels with exotic scenery and healthy stay.</p>
      </div>
    </div>
  );
}

export default Welcome;
