import './App.css';
import React, {useState} from 'react';
import data from './hotels-users-data.json';
import Welcome from './components/Welcome';
import DisplayHotels from './components/DisplayHotels';
import DisplayUser from './components/DisplayUser';
import Login from './components/Login';

function App() {
  const [isLoggedIn, setIsLoggedIn]=useState(false); 
  const [username, setUsername]=useState("");
  const [password, setPassword]=useState("");

  const [welcomeDiv, setWelcomeDiv]=useState(true);
  const [hotelDiv, setHotelDiv]=useState(false);
  const [userDiv, setUserDiv]=useState(false);
  const [loginClicked, setLoginClicked]=useState(false);

  function login(){
    setLoginClicked(true);
  }
  const logout =()=>{
    setIsLoggedIn(false);
    setWelcomeDiv(true);
    setHotelDiv(false);
    setUserDiv(false);
    alert("Bye!!!");
  }
  const showWelcome =()=>{
    setWelcomeDiv(true);
    setHotelDiv(false);
    setUserDiv(false);
  }
  const showHotels =()=>{
    setWelcomeDiv(false);
    setHotelDiv(true);
    setUserDiv(false);
  }
  const showUser =()=>{
    setWelcomeDiv(false);
    setHotelDiv(false);
    setUserDiv(true);
  }

  return (
    <div className="App">
      <header>
        <div className='logo' onClick={showWelcome}>
          <img alt='hotel logo' src={require('./images/icons8-hotel-64.png')} />
        </div>
        <div className='buttons'>
          <div className='button' onClick={showWelcome}>ABOUT-US</div>
          <div className='button' onClick={showHotels}>HOTELS</div>
          <div className={isLoggedIn? "hide button":"show button"} onClick={login}>LOGIN</div>
          <div className={isLoggedIn?"show userbar":"hide userbar"}>
            <div className={isLoggedIn?"show button":"hide button"} onClick={logout}>LOGOUT</div>
            <div className={isLoggedIn?"show userlogo":"hide userlogo"} onClick={showUser}>
              <img className={isLoggedIn?"show":"hide"} alt="user img" src={require('./images/icons8-user-30.png')}/>
            </div>
          </div>
        </div>
      </header>
      {loginClicked? 
        <Login 
            setIsLoggedIn={setIsLoggedIn} 
            setLoginClicked={setLoginClicked}
            users={data.users}
            userpass={{username, password}}
            setUsername={setUsername}
            setPassword={setPassword}
        />
      :null}
      <div className={welcomeDiv?"show":"hide"}>
        <Welcome showHotels={showHotels}/>
      </div>
      <div className={hotelDiv?"show":"hide"}>
        <DisplayHotels 
          hotels={data.hotels}
          users={data.users}
          userpass={{username, password}}
          isLoggedIn={isLoggedIn}/>
      </div>
      <div className={userDiv?"show":"hide"}>
        <DisplayUser 
          user={data.users.filter(p => p.username === String(username))[0]}
          isLoggedIn={isLoggedIn}
        />
      </div>
    </div>
  );
}

export default App;
