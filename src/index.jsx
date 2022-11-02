import React from 'react'
import ReactDOM from 'react-dom'
import Home from './pages/Home'
import Survey from './pages/Survey'
import Freelances from './pages/Freelances'
import Results from './pages/Results'
import Header from './components/Header'
import Error from './components/Error'
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom'
ReactDOM.render(
  <React.StrictMode>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" >
            <Home />
          </Route>
          <Route path="/survey/:questionNumber">
            <Survey />
          </Route>
          <Route exact path="/freelances" >
            <Freelances />
          </Route>
          <Route exact path="/results" >
            <Results />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
      </Router>   
  </React.StrictMode>,
  document.getElementById('root')
)