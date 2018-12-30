import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Happy from './components/Happy';
import Sleepy from './components/Sleepy';
import Guilty from './components/Guilty';

// your code goes here
class Home extends Component{
  render() {
    return(
      <Router>
        <div>
        <ul>
          <li>
              <Link to="/">Home</Link>
          </li>
          <li>
              <Link to="/happy">Happy</Link>
          </li>
          <li>
              <Link to="/sleepy">Sleepy</Link>
          </li>
          <li>
              <Link to="/guilty">Guilty</Link>
          </li>
        </ul>
          <Route path="/happy" component={Happy} />
          <Route path="/sleepy" component={Sleepy} />
          <Route path="/guilty" component={Guilty} />
          </div>
     </Router>
      // your code goes here
    )
  }
}

ReactDOM.render( <Home />, document.getElementById('root') );
