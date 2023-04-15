import {React, useState, useEffect} from "react";

function Login(props) {
    const [login,setLogin]=useState(false);
    const [cancel,setCancel]=useState(false);
    

    const handleCancel=()=>{
        setCancel(true);
    }
    const handleLogin=(e)=>{
        e.preventDefault();
        if (props.users.filter(p => p.username === String(props.userpass.username)).length > 0) {
            if(props.users.filter(p => p.username === String(props.userpass.username))[0].password===props.userpass.password){
                setLogin(true);
            }else{
                alert("Invalid Password");
            }
        }else{
            alert("Invalid Username");
        }
    }
    const handleUsername=(e)=>{
        props.setUsername(e.target.value);
   
    }
    const handlePassword=(e)=>{
        props.setPassword(e.target.value);
    }

    useEffect(() => {
        if(cancel){
            props.setLoginClicked(false);
        }
    },[cancel,props]);

    useEffect(() => {
        if(login){
            props.setLoginClicked(false);
            props.setIsLoggedIn(true);
        }
    },[props,login]);
    
    return (
      <div className="loginCover">
        <div className="loginDiv">
            <button onClick={handleCancel}>X</button>
            <h2>
                Sign Up
            </h2>
            <form>
                <label>Username: <input onChange={handleUsername} type="text" name="username" placeholder="Username" required /></label>
                <label>Password: <input onChange={handlePassword} type="password" name="password" placeholder="Password" required/></label>
                <button type="submit" onClick={handleLogin}>LOGIN</button>
            </form>
        </div>
      </div>
    );
  }
  
  export default Login;