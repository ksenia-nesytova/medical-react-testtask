import React, {useState} from "react"
import {Switch, Route, Link} from "react-router-dom"
import { BrowserRouter as Router } from 'react-router-dom'

import Home from "./Components/Home"
import Contacts from "./Components/Contacts"
import Account from "./Components/Account"

import './App.css';


function App() {
  const [isLoggedIn, setisLoggedIn] = useState({isLoggedIn: false})

  function handleSubmit(event) {
    setisLoggedIn(true)    
  }

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/contacts">Контакты</Link>
        </nav>

        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route  path="/account"><Account /></Route>
          <Route  path="/contacts"><Contacts /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App
