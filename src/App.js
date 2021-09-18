import React, {useState} from "react"
import {Switch, Route, Link} from "react-router-dom"
import { BrowserRouter as Router } from 'react-router-dom'

import Home from "./Components/Home"
import Contacts from "./Components/Contacts"
import Account from "./Components/Account"
import Login from "./Components/Login"


import './App.css';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isVisible, setIsVisible] = useState(false);

  function handleLogout() {
    setIsLoggedIn(false)
  }

  function handleLogin() {
    setIsVisible(!isVisible);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }



  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/contacts">Контакты</Link>
          {isLoggedIn ?
               <a href="#" onClick = {handleLogout}>Log out</a> :
               <a href="#" onClick = {handleLogin}>Log in</a>}
        </nav>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route  path="/account"><Account /></Route>
          <Route  path="/contacts"><Contacts /></Route>
        </Switch>
      </div>
      <Login isVisible={isVisible}/>
    </Router>
  );
}

export default App
