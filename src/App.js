import React from "react";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './pages/Home'
import Error from './pages/Error'
import About from './pages/About'
import Cocktaildetail from './pages/SingleCocktail'
import Navbar from './components/Navbar'
export default function App() {
  return (
    <Router>
    <Navbar />
    <Switch>
    <Route exact path="/">
        <Home />
    </Route>
      <Route  path="/about">
        <About />
      </Route>
      <Route  path="/detailpage/:id">
        <Cocktaildetail />
      </Route>
       <Route  path="*">
        <Error />
      </Route>
      </Switch>
    </Router>

  )

}
