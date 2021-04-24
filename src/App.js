import React from 'react'
import Header from './components/header/Header'
import './App.css'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Model3 from './components/model3/Model3'
import Header2 from './components/header2/Header2'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
          <Route path="/model-3">
            <Header2 />
            <Model3 />
          </Route>
        </Switch>
      </div>
    </Router>
    
  )
}

export default App
