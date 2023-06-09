import {Switch, Route, Redirect} from 'react-router-dom'

import Home from './components/Home'

import About from './components/About'

import StateRoute from './components/StateRoute'

import NotFound from './components/NotFound'

import './App.css'

// eslint-disable-next-line

const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route exact path="/state/:stateCode" component={StateRoute} />
    <Route path="/bad-path" component={NotFound} />
    <Redirect to="/bad-path" />
  </Switch>
)

export default App
