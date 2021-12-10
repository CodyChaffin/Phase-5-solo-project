import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router"
import LoginSignup from "./Components/LoginSignup";
import MainPage from "./Components/MainPage";
import ProfilePage from "./Components/ProfilePage"
import logo from "../src/Components/logo/RIlogo-removebg-preview.png"



function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)
  // const navigate = useNavigate();
  
  useEffect(() => {
    fetch('/me', {
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          res.json().then((user) => {
            setCurrentUser(user)
            setAuthChecked(true)
          })
        } else {
          setAuthChecked(true)
        }
      })
  }, [])

  if(!authChecked) { return <div></div>}
  return (
    <div className="App" >

      <div className='headerfiller'>
        <h1 className='header'>Recipe Island</h1>
        
        <img className="island" src={logo} alt='island'/>
      </div>
      <Routes>
      
      <Route path="/" element={<LoginSignup setCurrentUser={setCurrentUser}/>} />
        <Route path="/home" element={<MainPage
            setCurrentUser={setCurrentUser}
            currentUser={currentUser} />}/>
        <Route path="/home/user-profile" element={ <ProfilePage  currentUser={currentUser} setCurrentUser={setCurrentUser} setAuthChecked={setAuthChecked}/>} />
        
      </Routes>
    </div>
  );
}

export default App;
