import React, { Component } from 'react';
import './App.css';
import routes from './routes';
import { Link } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Link to="/route1">Route 1</Link>
          <Link to="/route2">Route 2</Link>
          <Link to="/route3">Route 3</Link>
        </div>
        {routes}
        <footer>
          Copyright footer enterprises
        </footer>
      </div>
    );
  }
}

export default App;
