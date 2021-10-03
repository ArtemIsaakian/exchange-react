import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import HistoryTransaction from './components/HistoryTransaction';
import './App.scss';
import Home from './components/Home';
import Header from './components/Header';

function App() {

  return (
    <Router>
      <div className="wrapper">
        <Header />
        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/history" component={HistoryTransaction} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
