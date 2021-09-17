import React from "react"
import {Switch, Route, Link} from "react-router-dom"
import { BrowserRouter as Router } from 'react-router-dom'

import Home from "./Components/Home"
import Contacts from "./Components/Contacts"
import Greeting from "./Components/Greeting"

import './App.css';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/contacts">Contacts</Link>
        </nav>

        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route  path="/greeting"><Greeting /></Route>
          <Route  path="/contacts"><Contacts /></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App
